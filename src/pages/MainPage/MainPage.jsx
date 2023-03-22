import BannerSection from '../../sections/BannerSection/BannerSection';
import CoinSliderSection from '../../sections/CoinSliderSection/CoinSliderSection';
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <BannerSection />
      <CoinSliderSection />
    </div>
  );
};

export default MainPage;
