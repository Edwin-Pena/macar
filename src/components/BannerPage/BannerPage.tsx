import './BannerPage.css';
import bannerPageIntro from '../../images/banner-content/banner-page-intro.jpg';
import bannerDesc1 from '../../images/banner-content/banner-description.jpg';
import bannerDesc2 from '../../images/banner-content/banner-description-2.jpg';
import bannerDesc3 from '../../images/banner-content/banner-description-3.jpg';
import chooseThread from '../../images/banner-content/choose-thread.jpg';

import colorStone from '../../images/banner-content/color-stone.jpg';
import yellow from '../../images/banner-content/amarillo.jpg';
import blue from '../../images/banner-content/azul.jpg';
import brown from '../../images/banner-content/cafe.jpg';
import orange from '../../images/banner-content/naranja.jpg';
import red from '../../images/banner-content/rojo.jpg';
import pink from '../../images/banner-content/rosa.jpg';
import grey from '../../images/banner-content/gris.jpg';
import goldenRain from '../../images/banner-content/lluvia-de-oro.jpg';
import silverRain from '../../images/banner-content/lluvia-de-plata.jpg';
import customMine from '../../images/banner-content/custom-mine.jpg';
import deliveryDescripcion from '../../images/banner-content/delivery-descripcion.jpg';
import howToUse from '../../images/banner-content/how-to-use.jpg';
import finalBanner from '../../images/banner-content/final-banner.jpg';

interface Props {
  onBack: () => void;
}

const BannerPage: React.FC<Props> = ({ onBack }) => {
  return (
    <>
      <div className='back-button' onClick={onBack}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='12'
          height='12'
          fill='none'
          stroke='currentColor'
          strokeWidth='1'
          className='bi bi-chevron-left chevron-back'
          viewBox='0 0 16 16'
        >
          <path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0' />
        </svg>
      </div>

      <div className='banner-page'>
        <img src={bannerPageIntro} alt='banner una piedra a la vez' className='banner-page-intro' />
        <a href='https://tally.so/r/ob9bAV' target='_blank' className='banner-link'>
          <img src={bannerDesc1} alt='Introducción de experiencia una piedra a la vez' className='banner-page-intro' />
        </a>
        <img src={bannerDesc2} alt='Celebremos las pequeñas victorias' className='banner-page-intro' />
        <img src={bannerDesc3} alt='Descripción qué es una piedra a la vez' className='banner-page-intro' />
        <img src={chooseThread} alt='Escoge un Hilo' className='banner-page-intro' />
        <img src={colorStone} alt='Escoge el color de la piedra' className='banner-page-intro' />

        <div className='color-stones'>
          <img src={yellow} alt='Amarillo' className='stone' />
          <img src={blue} alt='Azul' className='stone' />
          <img src={brown} alt='café' className='stone' />
          <img src={orange} alt='Naranja' className='stone' />
          <img src={red} alt='Rojo' className='stone' />
          <img src={pink} alt='Rosado' className='stone' />
          <img src={grey} alt='Gris' className='stone' />
          <img src={goldenRain} alt='Lluvia de oro' className='stone' />
          <img src={silverRain} alt='Lluvia de plata' className='stone' />
        </div>

        <a href='https://tally.so/r/ob9bAV' target='_blank' className='banner-link'>
          <img src={customMine} alt='Quiero configurar el mio' className='banner-page-intro' />
        </a>
        <img src={deliveryDescripcion} alt='¿Cómo lo voy a recibir?' className='banner-page-intro' />
        <img src={howToUse} alt='Modo de usos' className='banner-page-intro' />
        <a href='https://tally.so/r/ob9bAV' target='_blank' className='banner-link'>
          <img src={finalBanner} alt='Lleva el tuyo por 28.000 pesos colombianos' className='banner-page-intro' />
        </a>
      </div>
    </>
  );
};

export default BannerPage;
