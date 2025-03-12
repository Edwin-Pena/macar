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
      <div className="back-button" onClick={() => onNavigate("home")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          className="bi bi-chevron-left chevron-back"
          viewBox="0 0 16 16"
        >
          <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
        </svg>
      </div>
    </div>
  );
};

export default AboutUs;
