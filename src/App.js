import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CoinPage from './pages/CoinPage/CoinPage';
import MainPage from './pages/MainPage/MainPage';
import MainLayout from './components/layouts/MainLayout';

import { CURRENCY, CURRENCY_UUID, TIME_PERIODS } from './data';
import CoinsContext from './contexts/CoinsContext';
import fetchData from './utils/fetchData';

import './App.css';

function App() {
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState(
    localStorage.getItem('currency') || CURRENCY_UUID.USD
  );
  const [currencySymbol, setCurrencySymbol] = useState(
    localStorage.getItem('currencySymbol') || CURRENCY[0]
  );

  useEffect(() => {
    (async () => {
      const res = await fetchData(
        'https://coinranking1.p.rapidapi.com/coins',
        TIME_PERIODS[0],
        currency
      );

      const { coins } = res.data;

      const coinsDataArray = coins.map((coin) => {
        const {
          uuid,
          symbol,
          name,
          iconUrl,
          marketCap,
          price,
          change,
          sparkline,
          rank,
        } = coin;
        return {
          uuid,
          symbol,
          name,
          iconUrl,
          marketCap,
          price,
          change,
          sparkline,
          rank,
        };
      });
      setCoins(coinsDataArray);
    })();
  }, [currency]);

  localStorage.setItem('currency', currency);
  localStorage.setItem('currencySymbol', currencySymbol);

  return (
    <div className="App">
      <CoinsContext.Provider
        value={{
          coins,
          currency,
          currencySymbol,
          setCoins,
          setCurrency,
          setCurrencySymbol,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<MainPage />} />
              <Route path="/:uuid" element={<CoinPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CoinsContext.Provider>
    </div>
  );
}

export default App;
