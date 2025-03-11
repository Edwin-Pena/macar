import "./ListOfProducts.css";

interface InfoProducts {
  id: string;
  title: string;
  images: string[];
  price: string;
}

interface Props {
  products: InfoProducts[];
  onProductClick: (id: string) => void;
}

const ListOfProducts: React.FC<Props> = ({ products, onProductClick }) => {
  return (
    <div className="content">
      {products.map((product) => (
        <div
          className="product-container"
          key={product.id}
          onClick={() => {
            onProductClick(product.id);
          }}
        >
          <img
            src={product.images[0]}
            alt={product.title}
            className="product"
            loading="lazy"
          />
          <span className="product-title">{product.title}</span>
        </div>
      ))}
    </div>
  );
};

export default ListOfProducts;
