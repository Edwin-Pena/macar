import "./App.css";
import ProductsJson from "./data/References.json";
import ListOfProducts from "./components/ListOfProducts/ListOfProducts";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProductPage from "./components/ProductPage/ProductPage";
import { useState } from "react";

// Definimos la estructura del producto
interface Product {
  id: string;
  title: string;
  images: string[];
  price: string;
}

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (id: string) => {
    const product = ProductsJson.find((p) => p.id === id);
    setSelectedProduct(product || null);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedProduct(null);
    window.scrollTo(0, 0);
    console.log("volviendo");
  };

  return (
    <>
      <Navbar />
      {selectedProduct ? (
        <ProductPage product={selectedProduct} onBack={handleBack} />
      ) : (
        <>
          <ListOfProducts
            products={ProductsJson}
            onProductClick={handleProductClick}
          />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
