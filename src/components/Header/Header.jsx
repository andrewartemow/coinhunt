import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import CurrencyButtons from '../CurrencyButtons/CurrencyButtons';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <Logo />
          <CurrencyButtons />
        </div>
      </Container>
    </div>
  );
};

export default Header;
