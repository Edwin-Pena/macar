import './Banner.css';

interface Props {
  bannerImage: string;
  bannerImageMobile: string;
  bannerTitle: string;
  bannerTitleMobile: string;
  onBannerClick: (view: 'home' | 'product' | 'about' | 'banner-promo') => void;
}

const Banner: React.FC<Props> = ({ bannerImage, bannerImageMobile, bannerTitleMobile, bannerTitle, onBannerClick }) => {
  return (
    <div className='banner-container'>
      <picture className='picture-fit'>
        <source srcSet={bannerImageMobile} media='(max-width: 535px)' />
        <img src={bannerImage} alt='banner de collar' className='banner-image' loading='lazy' />
      </picture>

      <div className='content-container'>
        <picture className='picture-fit'>
          <source srcSet={bannerTitleMobile} media='(max-width: 535px)' />
          <img src={bannerTitle} alt='título del banner' className='banner-title' loading='lazy' />
        </picture>

        <div className='buttons-container'>
          <a
            href=''
            className='button-banner'
            onClick={(e) => {
              e.preventDefault();
              onBannerClick('banner-promo');
            }}
          >
            Quiero saber más
          </a>
          <a href='https://tally.so/r/ob9bAV' target='_blank' className='button-banner'>
            Pre-order
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
