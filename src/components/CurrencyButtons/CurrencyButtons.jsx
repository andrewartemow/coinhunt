import { useContext } from 'react';

import CoinsContext from '../../contexts/CoinsContext';
import { CURRENCY, CURRENCY_UUID } from '../../data';

import Button from '../ui/Button/Button';

import styles from './CurrencyButtons.module.css';

const CurrencyButtons = () => {
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
    </div>
  );
};

export default CurrencyButtons;
