import { useContext } from 'react';

import CoinsContext from '../../contexts/CoinsContext';

import { isMobile } from '../../data';

import styles from './CoinsListItem.module.css';

const CoinsListItem = ({ coin, handleCoinRowClick }) => {
  const context = useContext(CoinsContext);
  const { currencySymbol } = context;

  return (
    <tr
      key={coin.uuid}
      className={styles.coinsListItem}
      onClick={() => handleCoinRowClick(coin)}
    >
      <td>
        <div className={styles.coinsListItemCoinWrapper}>
          <div className={styles.coinsListItemCoin}>
            <div className={styles.imageWrapper}>
              <img src={coin.iconUrl} alt="failed to load" />
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
            String(coin.change).includes('-') ? styles.red : styles.green
          }
        >
          {coin.change}%
        </p>
      </td>
      {!isMobile && (
        <td>
          <p>
            {currencySymbol} {Number(coin.marketCap).toFixed(0)}
          </p>
        </td>
      )}
    </tr>
  );
};

export default CoinsListItem;
