import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CoinsContext from '../../contexts/CoinsContext';
import styles from './CoinsList.module.css';

const CoinsList = () => {
  const context = useContext(CoinsContext);
  const { coins, currencySymbol } = context;
  const navigate = useNavigate();
  const handleCoinRowClick = (coin) => {
    navigate(`/${coin.uuid}`);
  };

  return (
    <>
      <input className={styles.input} type="text" />
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
          {coins.map((coin) => (
            <tr
              key={coin.uuid}
              className={styles.coinsListItem}
              onClick={() => handleCoinRowClick(coin)}
            >
              <td>
                <div className={styles.coinsListItemCoinWrapper}>
                  <div className={styles.coinsListItemCoin}>
                    <div className={styles.imageWrapper}>
                      <img src={coin.iconUrl} alt="here needs to be image" />
                    </div>
                    <div className={styles.names}>
                      <h3>{coin.symbol}</h3>
                      <p>{coin.name}</p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <p className={styles.price}>
                  {currencySymbol} {Number(coin.price).toFixed(6)}
                </p>
              </td>
              <td>
                <p
                  className={
                    String(coin.change).includes('-')
                      ? styles.red
                      : styles.green
                  }
                >
                  {coin.change}%
                </p>
              </td>
              <td>
                <p>
                  {currencySymbol} {Number(coin.marketCap).toFixed(0)}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CoinsList;
