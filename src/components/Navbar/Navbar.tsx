import { useEffect, useState } from "react";
import macarLogo from "/images/macar-logo.png";
import "./Navbar.css";

interface NavbarProps {
  onNavigate: (view: "home" | "about" | "product") => void;
  currentView: "home" | "about" | "product";
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      {currentView === "home" && (
        <a href="#" className="nav-option" onClick={() => onNavigate("about")}>
          Nosotros
        </a>
      )}
      <a href="#" onClick={() => onNavigate("home")}>
        <img src={macarLogo} alt="macar-logo" className="nav-logo" />
      </a>
    </nav>
  );
};

export default Navbar;
