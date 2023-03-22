import { useEffect, useState } from 'react';
import Slider from 'react-slick';

import './CoinSlider.css';

const CoinSlider = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        'https://api.coinstats.app/public/v1/coins?skip=0&limit=50&currency=USD'
      );
      const data = await res.json();
      console.log(data);
      setCoins(data.coins);
    })();
  }, []);

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
            <div key={coin.id} className="coinSliderItem">
              <div className="coinImageWrapper">
                <img src={coin.icon} alt=":(" />
              </div>
              <h4>{coin.name}</h4>
              <p>
                <span>price:</span> {coin.price.toFixed(4)} USD
              </p>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default CoinSlider;
