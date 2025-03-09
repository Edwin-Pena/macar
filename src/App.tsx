import "./App.css";
import ProductsJson from "./data/References.json";
import ListOfProducts from "./components/ListOfProducts/ListOfProducts";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <ListOfProducts products={ProductsJson} />
      <Footer />
    </>
  );
};

export default App;
