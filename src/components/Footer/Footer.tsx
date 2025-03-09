import { useState } from "react";
import ListOfContacts from "../ListOfContacts/ListOfContacts";
import "./Footer.css";

const Footer = () => {
  const [contacts, setContacts] = useState(false);

  const handleClick = () => {
    setContacts(!contacts);
  };
  return (
    <footer className="footer">
      <a
        href="https://forms.gle/rh6TSAB88bA9CjU37"
        className="newsletter"
        target="_blank"
      >
        Únete a nuestro newsletter
      </a>
      <div className="contact-container">
        <div className="contact-text" onClick={handleClick}>
          Contáctanos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={`bi bi-chevron-down footer-icon ${
              contacts ? "rotate" : ""
            }`}
            viewBox="0 0 16 16"
          >
            <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
          </svg>
        </div>
        <ListOfContacts
          className={`list-container ${contacts ? "active" : ""}`}
        />
      </div>
      <span className="copyright">© macár 2025</span>
    </footer>
  );
};

export default Footer;
