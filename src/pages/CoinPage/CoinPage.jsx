import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';

import CoinsContext from '../../contexts/CoinsContext';
import fetchData from '../../utils/fetchData';
import styles from './CoinPage.module.css';
import CoinChart from '../../components/CoinChart/CoinChart';

const CoinPage = () => {
  const context = useContext(CoinsContext);
  const { coins, currencySymbol, currency } = context;
  const { uuid } = useParams();

  const [historyData, setHistoryData] = useState([]);
  const [timePeriod, setTimePeriod] = useState(
    localStorage.getItem('timePeriod') || '7d'
  );

  useEffect(() => {
    (async () => {
      const res = await fetchData(
        `https://coinranking1.p.rapidapi.com/coin/${uuid}/history`,
        timePeriod,
        currency
      );

      const sortedHistory = res.data.history.sort(
        (a, b) => a.timestamp - b.timestamp
      );

      setHistoryData(sortedHistory);
    })();
  }, [historyData, timePeriod]);

  const currentCoin = coins.length
    ? coins.find((coin) => coin.uuid === uuid)
    : JSON.parse(localStorage.getItem('coin'));

  const { symbol, name, iconUrl, marketCap, price, change, sparkline, rank } =
    currentCoin;

  localStorage.setItem('coin', JSON.stringify(currentCoin));
  localStorage.setItem('timePeriod', timePeriod);

  const handleTimePeriod = (timePeriod) => {
    setTimePeriod(timePeriod);
  };

  return (
    <div className={styles.coinPage}>
      <SideBar
        currencySymbol={currencySymbol}
        name={name}
        price={price}
        rank={rank}
        imgSrc={iconUrl}
        marketCap={marketCap}
      />
      <CoinChart
        currencySymbol={currencySymbol}
        historyData={historyData}
        timePeriod={timePeriod}
        handleTimePeriod={handleTimePeriod}
      />
    </div>
  );
};

export default CoinPage;
