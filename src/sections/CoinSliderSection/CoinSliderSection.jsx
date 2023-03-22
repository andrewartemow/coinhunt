import Section from '../../components/Section/Section';
import CoinSlider from '../../components/CoinSlider/CoinSlider';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './CoinSliderSection.module.css';

const CoinSliderSection = () => {
  return (
    <Section>
      <div className={styles.coinSliderSection}>
        <CoinSlider />
      </div>
    </Section>
  );
};

export default CoinSliderSection;
