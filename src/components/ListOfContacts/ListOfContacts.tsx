import "./ListOfContacts.css";

interface Props {
  className: string;
}

const ListOfContacts: React.FC<Props> = ({ className }) => {
  return (
    <ul className={className}>
      <li className="list-item">
        <a
          href="https://www.instagram.com/macar.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          className="list-link"
        >
          Instagram
        </a>
      </li>
      <li className="list-item">
        <a
          href="https://wa.me/message/3P477DCCBAZLH1"
          target="_blank"
          className="list-link"
        >
          WhatsApp
        </a>
      </li>
      <li className="list-item">
        <a
          href="https://www.tiktok.com/@macar.official?_t=ZS-8uXhPApTOvI&_r=1"
          target="_blank"
          className="list-link"
        >
          TikTok
        </a>
      </li>
      <li className="list-item">
        <a
          href="mailto:team.macar@gmail.com"
          target="_blank"
          className="list-link"
        >
          Correo
        </a>
      </li>
    </ul>
  );
};

export default ListOfContacts;
