import { useEffect, useState } from 'react';
import './Navbar.css';
import macarLogo from '../../images/macar-logo.png';

interface NavbarProps {
  onNavigate: (view: 'home' | 'about' | 'product') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a
        href=''
        onClick={(e) => {
          e.preventDefault();
          onNavigate('home');
        }}
      >
        <img src={macarLogo} alt='macar-logo' className='nav-logo' />
      </a>
    </nav>
  );
};

export default Navbar;
