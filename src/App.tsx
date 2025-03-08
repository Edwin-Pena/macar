import "./App.css";
import ProductsJson from "./data/References.json";
import ListOfProducts from "./components/ListOfProducts/ListOfProducts";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <ListOfProducts products={ProductsJson} />
    </>
  );
};

export default App;
