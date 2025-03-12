import { useRef, useState, useEffect } from "react";
import "./ProductPage.css";

interface Product {
  id: string;
  title: string;
  images: string[];
  price: string;
  colors: { [key: string]: string };
}

interface Props {
  product: Product;
  onBack: () => void;
}

const ProductPage: React.FC<Props> = ({ product, onBack }) => {
  const { images, title, price, colors } = product;
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

  // Escucha el scroll en móviles y actualiza el indicador
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
          ‹‹ Volver
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
          {/* Indicador de barra */}
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

      {/* Más información */}
      <div className="more-info">
        <ul className="product-options">
          <li className="option">Descripción</li>
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
            <span className="size-guide-btn" onClick={handleSizeGuide}>
              Guía de tallas
            </span>
          </li>
          <li className="option">
            <a href="#" className="help">
              Necesito asesoría
            </a>
          </li>
        </ul>

        {/* Guía de tallas */}
        <div className={`size-guide-window ${sizeGuide ? "visible" : ""}`}>
          <div className="size-guide">
            <span className="close-btn-guide" onClick={handleSizeGuide}>
              ×
            </span>
            <h1>Guía de tallas</h1>
          </div>
        </div>

        <div
          className="detailed-info border-info"
          onClick={handleShippingOptions}
        >
          Envíos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={`bi bi-chevron-down chevron-product-page ${
              shippingOptions ? "rotate" : ""
            }`}
            viewBox="0 0 16 16"
          >
            <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
          </svg>
          <p className={`detailed-msg ${shippingOptions ? "-active" : ""}`}>
            Envios. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="detailed-info" onClick={handleReturns}>
          Cambios y devoluciones
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={`bi bi-chevron-down chevron-product-page ${
              returns ? "rotate" : ""
            }`}
            viewBox="0 0 16 16"
          >
            <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
          </svg>
          <p className={`detailed-msg ${returns ? "-active" : ""}`}>
            Cambios y devoluciones. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      <div className="buy-container">
        <div className="product-info">
          <span className="product-name">{title}</span>
          <span className="product-price">{price}</span>
        </div>
        <button className="buy-button">COMPRAR AHORA</button>
      </div>
    </div>
  );
};

export default ProductPage;
