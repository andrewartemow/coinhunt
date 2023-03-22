import Section from '../../components/Section/Section';

import styles from './BannerSection.module.css';

const BannerSection = () => {
  return (
    <Section>
      <div className={styles.bannerSection}>
        <div className={styles.info}>
          <div className={styles.infoText}>
            <h1>Get All The Info Regarding Your Favorite Crypto Currency</h1>
            <h2>
              CoinHunt is the easiest and fastest way to check the
              cryptocurrency exchange rate
            </h2>
          </div>
          <div className={styles.infoImg}></div>
        </div>
      </div>
    </Section>
  );
};

export default BannerSection;
