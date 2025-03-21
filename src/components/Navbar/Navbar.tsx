import { useEffect, useState } from "react";
import "./Navbar.css";

interface NavbarProps {
  onNavigate: (view: "home" | "about" | "product") => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const macarLogo = "/images/macar-logo.png";

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
      <a href="#" onClick={() => onNavigate("home")}>
        <img src={macarLogo} alt="macar-logo" className="nav-logo" />
      </a>
    </nav>
  );
};

export default Navbar;
