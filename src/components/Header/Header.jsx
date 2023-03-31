import { useContext, useState } from 'react';

import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Button from '../ui/Button/Button';

import { CURRENCY, CURRENCY_UUID } from '../../data';

import styles from './Header.module.css';
import CoinsContext from '../../contexts/CoinsContext';

const Header = () => {
  const context = useContext(CoinsContext);
  const { currencySymbol, setCurrencySymbol, setCurrency } = context;

  const handleCurrency = (e, currency) => {
    const value = e.target.innerText;
    setCurrencySymbol(value);
    setCurrency(CURRENCY_UUID[currency]);
  };

  const btnStyles = {
    generalStyles: {
      border: '1px solid gray',
    },
    isActiveStyles: {
      backgroundColor: 'hsl(222, 100%, 61%)',
    },
  };

  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <Logo />
          <div className={styles.currency}>
            {CURRENCY.map((currency) => (
              <Button
                key={currency}
                isActive={currencySymbol === currency}
                btnStyles={btnStyles}
                onClick={(e) => handleCurrency(e, currency)}
              >
                {currency}
              </Button>
            ))}
            {/* <Button btnStyles={btnStyles}>USD</Button>
            <Button btnStyles={btnStyles}>EUR</Button> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
