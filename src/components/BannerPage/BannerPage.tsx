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

// mobile
import bannerDesc1Mobile from '../../images/banner-content/banner-mobile/banner-description-mobile.jpg';
import bannerDesc2Mobile from '../../images/banner-content/banner-mobile/banner-description-2-mobile.jpg';
import bannerDesc3Mobile from '../../images/banner-content/banner-mobile/banner-mobile-3.jpg';
import chooseThreadMobile from '../../images/banner-content/banner-mobile/choose-thread-mobile.jpg';

import colorStoneMobile from '../../images/banner-content/banner-mobile/color-stone-mobile.jpg';
import yellowMobile from '../../images/banner-content/banner-mobile/amarillo-mobile.jpg';
import blueMobile from '../../images/banner-content/banner-mobile/azul-mobile.jpg';
import brownMobile from '../../images/banner-content/banner-mobile/cafe-mobile.jpg';
import orangeMobile from '../../images/banner-content/banner-mobile/naranja-mobile.jpg';
import redMobile from '../../images/banner-content/banner-mobile/rojo-mobile.jpg';
import pinkMobile from '../../images/banner-content/banner-mobile/rosa-mobile.jpg';
import greyMobile from '../../images/banner-content/banner-mobile/gris-mobile.jpg';
import goldenRainMobile from '../../images/banner-content/banner-mobile/lluvia-de-oro-mobile.jpg';
import silverRainMobile from '../../images/banner-content/banner-mobile/lluvia-de-plata-mobile.jpg';

import customMineMobile from '../../images/banner-content/banner-mobile/custom-mine-mobile.jpg';
import deliveryDescripcionMobile from '../../images/banner-content/banner-mobile/delivery-descripcion-mobile.jpg';
import howToUseMobile from '../../images/banner-content/banner-mobile/how-to-use-mobile.jpg';
import finalBannerMobile from '../../images/banner-content/banner-mobile/final-banner-mobile.jpg';

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
          <picture className='picture-fit'>
            <source srcSet={bannerDesc1Mobile} media='(max-width: 535px)' />
            <img
              src={bannerDesc1}
              alt='Introducción de experiencia una piedra a la vez'
              className='banner-page-intro'
              loading='lazy'
            />
          </picture>
        </a>

        <picture className='picture-fit'>
          <source srcSet={bannerDesc2Mobile} media='(max-width: 535px)' />
          <img src={bannerDesc2} alt='Celebremos las pequeñas victorias' className='banner-page-intro' loading='lazy' />
        </picture>

        <picture className='picture-fit'>
          <source srcSet={bannerDesc3Mobile} media='(max-width: 535px)' />
          <img
            src={bannerDesc3}
            alt='Descripción qué es una piedra a la vez'
            className='banner-page-intro'
            loading='lazy'
          />
        </picture>

        <picture className='picture-fit'>
          <source srcSet={chooseThreadMobile} media='(max-width: 535px)' />
          <img src={chooseThread} alt='Escoge un Hilo' className='banner-page-intro' loading='lazy' />
        </picture>

        <picture className='picture-fit'>
          <source srcSet={colorStoneMobile} media='(max-width: 535px)' />
          <img src={colorStone} alt='Escoge el color de la piedra' className='banner-page-intro' loading='lazy' />
        </picture>

        <div className='color-stones'>
          <picture className='picture-fit'>
            <source srcSet={yellowMobile} media='(max-width: 535px)' />
            <img src={yellow} alt='Amarillo' className='stone' loading='lazy' />
          </picture>

          <picture className='picture-fit'>
            <source srcSet={blueMobile} media='(max-width: 535px)' />
            <img src={blue} alt='Azul' className='stone' loading='lazy' />
          </picture>

          <picture className='picture-fit'>
            <source srcSet={brownMobile} media='(max-width: 535px)' />
            <img src={brown} alt='café' className='stone' loading='lazy' />
          </picture>

          <picture className='picture-fit'>
            <source srcSet={orangeMobile} media='(max-width: 535px)' />
            <img src={orange} alt='Naranja' className='stone' loading='lazy' />
          </picture>

          <picture className='picture-fit'>
            <source srcSet={redMobile} media='(max-width: 535px)' />
            <img src={red} alt='Rojo' className='stone' loading='lazy' />
          </picture>

          <picture className='picture-fit'>
            <source srcSet={pinkMobile} media='(max-width: 535px)' />
            <img src={pink} alt='Rosado' className='stone' loading='lazy' />
          </picture>

          <picture className='picture-fit'>
            <source srcSet={greyMobile} media='(max-width: 535px)' />
            <img src={grey} alt='Gris' className='stone' loading='lazy' />
          </picture>

          <picture className='picture-fit'>
            <source srcSet={goldenRainMobile} media='(max-width: 535px)' />
            <img src={goldenRain} alt='Lluvia de oro' className='stone' loading='lazy' />
          </picture>

          <picture className='picture-fit'>
            <source srcSet={silverRainMobile} media='(max-width: 535px)' />
            <img src={silverRain} alt='Lluvia de plata' className='stone' loading='lazy' />
          </picture>
        </div>

        <a href='https://tally.so/r/ob9bAV' target='_blank' className='banner-link'>
          <picture className='picture-fit'>
            <source srcSet={customMineMobile} media='(max-width: 535px)' />
            <img src={customMine} alt='Quiero configurar el mio' className='banner-page-intro' loading='lazy' />
          </picture>
        </a>

        <picture className='picture-fit'>
          <source srcSet={deliveryDescripcionMobile} media='(max-width: 535px)' />
          <img src={deliveryDescripcion} alt='¿Cómo lo voy a recibir?' className='banner-page-intro' loading='lazy' />
        </picture>

        <picture className='picture-fit'>
          <source srcSet={howToUseMobile} media='(max-width: 535px)' />
          <img src={howToUse} alt='Modo de usos' className='banner-page-intro' loading='lazy' />
        </picture>

        <a href='https://tally.so/r/ob9bAV' target='_blank' className='banner-link'>
          <picture className='picture-fit'>
            <source srcSet={finalBannerMobile} media='(max-width: 535px)' />
            <img
              src={finalBanner}
              alt='Lleva el tuyo por 28.000 pesos colombianos'
              className='banner-page-intro'
              loading='lazy'
            />
          </picture>
        </a>
      </div>
    </>
  );
};

export default BannerPage;
