import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import CoinsContext from '../../contexts/CoinsContext';

import './CoinSlider.css';

const CoinSlider = () => {
  const context = useContext(CoinsContext);
  const { coins, currencySymbol } = context;
  const navigate = useNavigate();
  const handleCoinRowClick = (coin) => {
    navigate(`/${coin.uuid}`);
  };

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="coinSlider">
      <Slider {...settings}>
        {!!coins.length &&
          coins.map((coin) => (
            <div
              key={coin.uuid}
              className="coinSliderItem"
              onClick={() => handleCoinRowClick(coin)}
            >
              <div className="coinImageWrapper">
                <img src={coin.iconUrl} alt=":(" />
              </div>
              <h4>{coin.name}</h4>
              <p>
                <span>price:</span> {currencySymbol}{' '}
                {Number(coin.price).toFixed(4)}
              </p>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default CoinSlider;
