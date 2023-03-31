import { createContext } from 'react';

const CoinsContext = createContext({
  coins: [],
  currency: '',
  currencySymbol: '',
  setCoins: () => {},
  setCurrency: () => {},
  setCurrencySymbol: () => {},
});

export default CoinsContext;
