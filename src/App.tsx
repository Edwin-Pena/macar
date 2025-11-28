import { products } from './data/products';
import ListOfProducts from './components/ListOfProducts/ListOfProducts';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProductPage from './components/ProductPage/ProductPage';
import AboutUs from './components/AboutUs/AboutUs';
import { useState } from 'react';
import Banner from './components/Banner/Banner';
import bannerImage from './images/banner-content/banner-necklace.jpg';
import bannerTitle from './images/banner-content/banner-title.png';
import bannerImageMobile from './images/banner-content/banner-mobile/banner-mobile.jpg';
import bannerTitleMobile from './images/banner-content/banner-mobile/banner-title-mobile.png';
import BannerPage from './components/BannerPage/BannerPage';

interface Product {
  id: string;
  title: string;
  description: string;
  images: string[];
  price: string;
  colors: Record<string, string>;
}

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [view, setView] = useState<'home' | 'product' | 'about' | 'banner-promo'>('home');

  const handleProductClick = (id: string) => {
    const product = products.find((p) => p.id === id) as Product | undefined;
    setSelectedProduct(product || null);
    setView('product');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedProduct(null);
    setView('home');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar onNavigate={setView} />
      {view === 'product' && selectedProduct ? (
        <ProductPage product={selectedProduct} onBack={handleBack} />
      ) : view === 'about' ? (
        <AboutUs onNavigate={setView} />
      ) : view === 'banner-promo' ? (
        <BannerPage onBack={handleBack} />
      ) : (
        <>
          <Banner
            bannerImage={bannerImage}
            bannerImageMobile={bannerImageMobile}
            bannerTitle={bannerTitle}
            bannerTitleMobile={bannerTitleMobile}
            onBannerClick={setView}
          />
          <ListOfProducts products={products} onProductClick={handleProductClick} />
          <Footer onNavigate={setView} currentView={view} />
        </>
      )}
    </>
  );
};

export default App;
