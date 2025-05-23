import { useRef, useState, useEffect } from "react";
import "./ProductPage.css";
import sizeGuideImg from "/images/size-guide.jpg";

interface Product {
  id: string;
  title: string;
  description: string;
  images: string[];
  price: string;
  colors: { [key: string]: string };
}

interface Props {
  product: Product;
  onBack: () => void;
}

const ProductPage: React.FC<Props> = ({ product, onBack }) => {
  const { images, title, description, price, colors } = product;
  const carousel = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [shippingOptions, setShippingOptions] = useState(false);
  const [returns, setReturns] = useState(false);
  const [sizeGuide, setSizeGuide] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleShippingOptions = () => {
    setShippingOptions(!shippingOptions);
  };

  const handleReturns = () => {
    setReturns(!returns);
  };

  const handleSizeGuide = () => {
    setSizeGuide(!sizeGuide);
  };

  useEffect(() => {
    setCount(0);
  }, [product]);

  const incrementCarousel = (delta: number) => {
    if (!carousel.current) return;

    const width = carousel.current.offsetWidth;
    const newIndex = count + delta;

    if (newIndex >= images.length) {
      setCount(0);
      carousel.current.scrollTo(0, 0);
      return;
    } else if (newIndex < 0) {
      setCount(images.length - 1);
      carousel.current.scrollTo(width * (images.length - 1), 0);
      return;
    }

    carousel.current.scrollTo({
      left: carousel.current.scrollLeft + width * delta,
      behavior: "smooth",
    });
    setCount(newIndex);
  };

  const handleColorSelection = (colorName: string) => {
    setSelectedColor(colorName);
  };

  // Listen to the scroll on mobile and update the indicator
  useEffect(() => {
    const handleScroll = () => {
      if (!carousel.current) return;

      const scrollLeft = carousel.current.scrollLeft;
      const width = carousel.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / width);

      setCount(newIndex);
    };

    const carouselRef = carousel.current;
    if (carouselRef) {
      carouselRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carouselRef) {
        carouselRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="product-page">
      <div className="carousel-container">
        <div className="back-button" onClick={onBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="bi bi-chevron-left chevron-back"
            viewBox="0 0 16 16"
          >
            <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
          </svg>
        </div>
        <div
          className="carousel-btn left-btn"
          onClick={() => incrementCarousel(-1)}
        ></div>
        <div
          className="carousel-btn right-btn"
          onClick={() => incrementCarousel(1)}
        ></div>
        <div className="carousel" ref={carousel}>
          {images.map((img, index) => (
            <div className="carousel-item" key={index}>
              <img
                src={img}
                alt={title}
                className="carousel-image"
                loading="lazy"
              />
            </div>
          ))}
          {/*bar indicador */}
          <ul className="bar-indicador">
            {images.map((_, index) => (
              <span
                key={index}
                className={`img-indicador ${
                  count === index ? "active-bar-indicador" : ""
                }`}
              ></span>
            ))}
          </ul>
        </div>
      </div>

      {/* more info */}
      <div className="more-info">
        <ul className="product-options">
          <li className="option">
            <p className="product-desc">{description}</p>
          </li>
          <li className="option">
            <div className="product-colors">
              <span className="text-color">Colores disponibles:</span>
              <div className="colors-container">
                {Object.entries(colors).map(([colorName, colorCode]) => (
                  <div
                    key={colorName}
                    className={`color-box ${
                      selectedColor === colorName ? "selected" : ""
                    }`}
                    style={{ backgroundColor: colorCode }}
                    title={colorName}
                    onClick={() => handleColorSelection(colorName)}
                  ></div>
                ))}
              </div>
            </div>
          </li>
          <li className="option">
            <div className="size">
              <span className="size-title">Tallas:</span>
              <ul className="sizes">
                <li className="size-item">S</li>
                <li className="size-item">M</li>
                <li className="size-item">L</li>
              </ul>
            </div>
          </li>
          <li className="option">
            <span className="size-guide-btn" onClick={handleSizeGuide}>
              Guía de tallas
            </span>
          </li>
          <li className="option">
            <a
              href="https://wa.me/573207893343?text=Hola%20mac%C3%A1r%2C%20necesito%20asesor%C3%ADa%20con..."
              className="help"
              target="_blank"
            >
              Necesito asesoría
            </a>
          </li>
        </ul>

        {/* responsive product options */}
        <div className="responsive-info-product">
          <ul className="product-options-responsive">
            <li className="option">
              <p className="product-desc">{description}</p>
            </li>
            <li className="option">
              <div className="product-colors">
                <span className="text-color">Colores disponibles:</span>
                <div className="colors-container">
                  {Object.entries(colors).map(([colorName, colorCode]) => (
                    <div
                      key={colorName}
                      className={`color-box ${
                        selectedColor === colorName ? "selected" : ""
                      }`}
                      style={{ backgroundColor: colorCode }}
                      title={colorName}
                      onClick={() => handleColorSelection(colorName)}
                    ></div>
                  ))}
                </div>
              </div>
            </li>
            <li className="option">
              <div className="size">
                <span className="size-title">Tallas:</span>
                <ul className="sizes">
                  <li className="size-item">S</li>
                  <li className="size-item">M</li>
                  <li className="size-item">L</li>
                </ul>
              </div>
            </li>
            <li className="option">
              <span className="size-guide-btn" onClick={handleSizeGuide}>
                Guía de tallas
              </span>
            </li>
            <li className="option">
              <a
                href="https://wa.me/573207893343?text=Hola%20mac%C3%A1r%2C%20necesito%20asesor%C3%ADa%20con..."
                className="help"
                target="_blank"
              >
                Necesito asesoría
              </a>
            </li>
          </ul>

          <div className="buy-container-responsive">
            <div className="product-info">
              <span className="product-name">{title}</span>
              <span className="product-price">{price}</span>
            </div>
            <a
              href="https://wa.me/573207893343?text=Hola%20mac%C3%A1r%2C%20vengo%20del%20cat%C3%A1logo%20y%20me%20interesan%20las%20siguientes%20piezas%3A%0A%2AProducto%3A%2A%20%5BNombre%20de%20la%20prenda%5D%0A%2AColor%3A%2A%20%5BColor%20deseado%5D%0A%2ATalla%3A%2A%20%5BTalla%20seleccionada%5D"
              className="buy-button"
              target="_blank"
            >
              COMPRAR AHORA
            </a>
          </div>
        </div>

        {/*size guide */}
        <div className={`size-guide-window ${sizeGuide ? "visible" : ""}`}>
          <div className="size-guide-container">
            <span className="close-btn-guide" onClick={handleSizeGuide}>
              ×
            </span>
            <img
              src={sizeGuideImg}
              className="size-guide"
              alt="Guía de tallas"
            />
          </div>
        </div>

        <div
          className="detailed-info border-info"
          onClick={handleShippingOptions}
        >
          Envíos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            className={`bi bi-chevron-down chevron-product-page ${
              shippingOptions ? "rotate" : ""
            }`}
            viewBox="0 0 16 16"
          >
            <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
          </svg>
          <div
            className={`messages-container ${shippingOptions ? "-active" : ""}`}
          >
            <p className="detailed-msg">
              Cali y alrededores: 3 a 7 días hábiles.
            </p>
            <p className="detailed-msg">
              Otras ciudades: Despachamos en un máximo de 3 días hábiles, y el
              tiempo de entrega dependerá de la transportadora.
            </p>
            <p className="detailed-msg">
              *El costo del envío no está incluido en el precio del producto.
            </p>
          </div>
        </div>

        <div className="detailed-info" onClick={handleReturns}>
          Cambios y devoluciones
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            className={`bi bi-chevron-down chevron-product-page ${
              returns ? "rotate" : ""
            }`}
            viewBox="0 0 16 16"
          >
            <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
          </svg>
          <div className={`messages-container ${returns ? "-active" : ""}`}>
            <div className="detailed-msg-container">
              <p className="detailed-msg">
                Puedes solicitar el cambio o la devolución de un producto dentro
                de los 5 días calendario siguientes a la recepción del paquete,
                siempre que se cumplan las siguientes condiciones:
              </p>
              <ul className="list-detailed-msg">
                <li>
                  <p className="detailed-msg">
                    La prenda debe estar en su estado original, con etiquetas y
                    sin señales de uso.
                  </p>
                </li>
                <li>
                  <p className="detailed-msg">
                    No debe presentar manchas de maquillaje, suciedad ni olores
                    ajenos al producto.
                  </p>
                </li>
                <li>
                  <p className="detailed-msg">
                    Debes enviar una fotografía clara del producto para validar
                    el estado y el motivo de la solicitud.
                  </p>
                </li>
              </ul>
            </div>

            <div className="detailed-msg-container">
              <p className="detailed-msg">
                El cambio o devolución solo aplica en los siguientes casos:
              </p>
              <ul className="list-detailed-msg">
                <li>
                  <p className="detailed-msg">
                    Si el producto llega en mal estado (costuras sueltas,
                    manchas, olores fuertes, hoyos, rasgaduras) o no cumple con
                    nuestros estándares de calidad. Aplica únicamente para
                    defectos de fabricación. No se considerarán defectos
                    aquellos causados por desgaste de uso o por no seguir las
                    instrucciones de cuidado y lavado.
                  </p>
                </li>
                <li>
                  <p className="detailed-msg">
                    Si la talla o el color recibido no corresponde con el
                    solicitado en la compra.
                  </p>
                </li>
                <li>
                  <p className="detailed-msg">
                    Si el producto recibido es incorrecto o no coincide con las
                    imágenes de referencia.
                  </p>
                </li>
              </ul>
            </div>

            <div className="detailed-msg-container">
              <p className="detailed-msg">
                Opciones de reembolso o cambio: Una vez aprobada la solicitud*,
                puedes elegir entre las siguientes opciones:
              </p>
              <ol className="list-detailed-msg">
                <li>
                  <p className="detailed-msg">
                    Cambio por la misma prenda en perfectas condiciones.
                  </p>
                </li>
                <li>
                  <p className="detailed-msg">
                    Devolución del dinero a través del mismo método de pago
                    utilizado en la compra.
                  </p>
                </li>
                <li>
                  <p className="detailed-msg">
                    Entrega de un bono por el valor de la compra, válido por 6
                    meses, para redimir en una próxima compra.
                  </p>
                </li>
              </ol>
              <p className="extra-detailed-msg">
                *Tener en cuenta que, si la prenda puede ser reparada,
                procederemos con las reparaciones necesarias.
              </p>
              <p className="extra-detailed-msg">
                Importante: No realizamos cambios por talla, ya que
                proporcionamos una guía de medidas detallada para que cada
                clienta elija la talla más adecuada antes de su compra.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="buy-container">
        <div className="product-info">
          <span className="product-name">{title}</span>
          <span className="product-price">{price}</span>
        </div>
        <a
          href="https://wa.me/573207893343?text=Hola%20mac%C3%A1r%2C%20vengo%20del%20cat%C3%A1logo%20y%20me%20interesan%20las%20siguientes%20piezas%3A%0A%2AProducto%3A%2A%20%5BNombre%20de%20la%20prenda%5D%0A%2AColor%3A%2A%20%5BColor%20deseado%5D%0A%2ATalla%3A%2A%20%5BTalla%20seleccionada%5D"
          className="buy-button"
          target="_blank"
        >
          COMPRAR AHORA
        </a>
      </div>
    </div>
  );
};

export default ProductPage;
