import BannerSection from '../../sections/BannerSection/BannerSection';
import CoinSliderSection from '../../sections/CoinSliderSection/CoinSliderSection';
import CoinsListSection from '../../sections/CoinsListSection/CoinsListSection';
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <BannerSection />
      <CoinSliderSection />
      <CoinsListSection />
    </div>
  );
};

export default MainPage;
