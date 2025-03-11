import "./AboutUs.css";

interface AboutUsProps {
  onNavigate: (view: "home") => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ onNavigate }) => {
  return (
    <div className="about-container">
      <h1>Sobre Nosotros</h1>
      <p>
        Somos Macár, una marca inspirada en la creatividad y la autenticidad...
      </p>
      <button className="back-button" onClick={() => onNavigate("home")}>
        Volver al Home
      </button>
    </div>
  );
};

export default AboutUs;
