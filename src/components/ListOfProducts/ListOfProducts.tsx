import "./ListOfProducts.css";

interface InfoProducts {
  id: string;
  title: string;
  img: string;
}

interface Props {
  products: InfoProducts[];
}

const ListOfProducts: React.FC<Props> = ({ products }) => {
  return (
    <div className="content">
      {products.map((product) => (
        <div className="product-container" key={product.id}>
          <img src={product.img} alt={product.title} className="product" />
          <span className="product-title">{product.title}</span>
        </div>
      ))}
    </div>
  );
};

export default ListOfProducts;
