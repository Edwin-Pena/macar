import "./AboutUs.css";

interface AboutUsProps {
  onNavigate: (view: "home") => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ onNavigate }) => {
  const aboutBannerImg = "/images/about-banner.jpg";
  const sustainabilityImg = "/images/sustainability.jpg";
  const detailsImg = "/images/details.jpg";
  return (
    <div className="about-container">
      <div className="back-button" onClick={() => onNavigate("home")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="bi bi-chevron-left chevron-back"
          viewBox="0 0 16 16"
        >
          <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
        </svg>
      </div>

      <div className="about-content">
        <img
          src={aboutBannerImg}
          className="principal-img"
          alt="Mi abuela"
        ></img>
        <div className="about-text-container padding-about-content">
          <h2 className="title">MÁS QUE UNA MARCA</h2>
          <p className="about-text section-padding">
            Es la extensión de mi esencia. Soy una mujer soñadora, apasionada y
            creativa que encuentra en la moda un mundo muy interesante. Me
            fascina el olor de las telas, el sentir de las texturas y el sonido
            de la aguja al coser. macár es el reflejo de las mujeres que han
            marcado mi vida. Encuentro inspiración en su valentía, su fuerza y
            el amor con la que enfrentan cada día. Es a través de ellas que he
            construido este universo, un espacio donde cada prenda es más que
            ropa: es una forma de expresión, un aliado para sentirte segura y
            auténtica. Aquí descubrirás mi visión de la moda, mis sentimientos,
            mis pensamientos y mi proceso.
          </p>
          <p className="about-text section-padding">
            Cada diseño nace con la intención de eliminar frustraciones, de
            abrazar la diversidad de cuerpos y de ofrecer piezas con las que
            puedas sentirte cómoda, poderosa y libre. Al igual que tú, soy una
            mujer con un gran sueño. Estoy construyéndolo, y quiero que me
            acompañes en este camino. Juntas, hagamos de macár un espacio donde
            la moda nos empodere, donde cada detalle cuente y donde nada nos
            detenga.
          </p>
        </div>
      </div>

      <div className="about-content padding-about-content">
        <div className="image-container">
          <img
            src={sustainabilityImg}
            className="about-img"
            alt="Tela macár malla"
          ></img>
          <div className="about-title">
            <h2 className="title white-text">SOSTENIBILIDAD</h2>
            <span className="subtitle white-text">FASE 1</span>
          </div>
        </div>
        <div className="about-text-container">
          <p className="about-text">
            Para nosotros, la sostenibilidad y la calidad son pilares
            fundamentales en nuestro universo. Creemos en una moda consciente y
            responsable, y aunque estamos en el inicio de este camino, cada paso
            cuenta.
          </p>
          <p className="about-text">
            En esta primera fase, hemos dado el primer paso con empaques
            elaborados con materiales biodegradables, contribuyendo así a
            reducir nuestro impacto ambiental. Este es solo el comienzo.
            Seguiremos explorando nuevas formas de hacer moda de manera más
            responsable, siempre manteniendo nuestra promesa de calidad y
            sofisticación.
          </p>
        </div>
      </div>

      <div className="about-content padding-about-content">
        <div className="image-container">
          <img
            src={detailsImg}
            className="about-img"
            alt="Cociendo botón a tela"
          ></img>
          <h2 className="about-title white-text">DETALLES</h2>
        </div>
        <div className="about-text-container">
          <p className="about-text">
            Aquí es donde reside la verdadera belleza de MACAR: en los detalles.
            Cada pieza está cuidadosamente elaborada, con terminaciones hechas a
            mano que reflejan el amor y la dedicación que ponemos en cada
            diseño. Creemos que el lujo está en la atención a los pequeños
            detalles, en la calidad de los acabados y en la historia que cada
            prenda cuenta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
