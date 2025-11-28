import './Banner.css';

interface Props {
  bannerImage: string;
  bannerTitle: string;
  onBannerClick: (view: 'home' | 'product' | 'about' | 'banner-promo') => void;
}

const Banner: React.FC<Props> = ({ bannerImage, bannerTitle, onBannerClick }) => {
  return (
    <div className='banner-container'>
      <img src={bannerImage} alt='banner de collar' className='banner-image' />
      <div className='content-container'>
        <img src={bannerTitle} alt='título del banner' className='banner-title' />
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
