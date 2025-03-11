import { useRef, useState, useEffect } from "react";
import "./ProductPage.css";

interface Product {
  id: string;
  title: string;
  images: string[];
  price: string;
}

interface Props {
  product: Product;
  onBack: () => void;
}

const ProductPage: React.FC<Props> = ({ product, onBack }) => {
  const { images, title, price } = product;
  const carousel = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [shippingOptions, setShippingOptions] = useState(false);
  const [returns, setReturns] = useState(false);
  const [sizeGuide, setSizeGuide] = useState(false);

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

    carousel.current.scrollTo(carousel.current.scrollLeft + width * delta, 0);
    setCount(newIndex);
  };

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
        </div>
      </div>

      {/* mor info */}
      <div className="more-info">
        <ul className="product-options">
          <li className="option">Descripción</li>
          <li className="option">
            <div className="product-colors">
              <span className="text-color">Negro</span>
              <div className="colors-container">
                <div className="color-box color1"></div>
                <div className="color-box color2"></div>
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

        {/* size guide */}
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
            Tempora quaerat tenetur velit ullam iste nisi, ab nulla dolorem
            consectetur voluptatem pariatur blanditiis beatae, excepturi
            delectus cum laborum similique neque voluptatum!
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
            Cambios y devoluciones. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Tempora quaerat tenetur velit ullam iste nisi, ab
            nulla dolorem consectetur voluptatem pariatur blanditiis beatae,
            excepturi delectus cum laborum similique neque voluptatum!
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
