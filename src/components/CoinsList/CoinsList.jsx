import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../ui/Input/Input';
import CoinsListItem from '../CoinsListItem/CoinsListItem';

import CoinsContext from '../../contexts/CoinsContext';
import styles from './CoinsList.module.css';

const CoinsList = () => {
  const navigate = useNavigate();
  const context = useContext(CoinsContext);
  const { coins } = context;

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(coins);
  }, [coins]);

  const handleCoinRowClick = (coin) => {
    navigate(`/${coin.uuid}`);
  };

  const handleChange = (e) => {
    if (!e.target.value) return setSearchResults(coins);

    const resultsArray = coins.filter((coin) => {
      return coin.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setSearchResults(resultsArray);
  };

  return (
    <>
      <Input type="text" onChange={handleChange} />
      <table className={styles.coinsList}>
        <thead className={styles.coinsDetails}>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((coin) => (
            <CoinsListItem
              coin={coin}
              handleCoinRowClick={handleCoinRowClick}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CoinsList;
