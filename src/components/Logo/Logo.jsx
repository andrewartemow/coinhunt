import { RiBitCoinFill } from 'react-icons/ri';

import styles from './Logo.module.css';

const Logo = () => {
  const iconStyle = {
    fontSize: '25px',
    color: 'hsl(222, 100%, 61%)',
  };
  return (
    <div className={styles.logo}>
      <h3>CoinHunt</h3>
      <RiBitCoinFill style={iconStyle} />
    </div>
  );
};

export default Logo;
