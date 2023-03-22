import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <Logo />
          <p>USD</p>
        </div>
      </Container>
    </div>
  );
};

export default Header;
