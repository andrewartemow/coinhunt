import CoinsList from '../../components/CoinsList/CoinsList';
import Section from '../../components/Section/Section';

import styles from './CoinsListSection.module.css';

const CoinsListSection = () => {
  return (
    <Section>
      <div className={styles.coinsListSection}>
        <h2>Cryptocurrency Prices</h2>
        <CoinsList />
      </div>
    </Section>
  );
};

export default CoinsListSection;
