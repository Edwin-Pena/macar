import './Banner.css';

interface Props {
  bannerImage: string;
  bannerTitle: string;
}

const Banner: React.FC<Props> = ({ bannerImage, bannerTitle }) => {
  return (
    <div className='banner-container'>
      <img src={bannerImage} alt='banner de collar' className='banner-image' />
      <div className='content-container'>
        <img src={bannerTitle} alt='título del banner' className='banner-title' />
        <div className='buttons-container'>
          <a href='' className='button-banner'>
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
