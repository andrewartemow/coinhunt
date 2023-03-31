import styles from './SideBar.module.css';

const SideBar = ({ currencySymbol, name, price, rank, imgSrc, marketCap }) => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.coinImageWrapper}>
        <img src={imgSrc} alt=":(" />
      </div>
      <h2>{name}</h2>
      <h3>
        Rank: <span>{rank}</span>
      </h3>
      <h3>
        CurrentPrice:{' '}
        <span>
          {currencySymbol} {Number(price).toFixed(5)}
        </span>
      </h3>
      <h3>
        MarketCap:{' '}
        <span>
          {currencySymbol} {Number(marketCap).toFixed(0)}
        </span>
      </h3>
    </div>
  );
};

export default SideBar;
