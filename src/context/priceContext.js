import React, { createContext, useState, useEffect } from 'react';
import { getCoinData, getMarketData, getTrendingCoins } from '../services/market.services';

const PriceContext = createContext();

const PriceProvider = ({ children }) => {
  const [btc, setBtc] = useState({
    market_cap: 0,
    img: '',
    current_price: 0,
    name: 'Bitcoin',
    symbol: 'btc',
  });
  const [selected, setSelected] = useState([]);
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    async function getData() {
      const newData = await getCoinData('bitcoin');
      const selectedData = await getMarketData();
      const trendingCoins = await getTrendingCoins();
      const trendingData = await getMarketData(trendingCoins.map(({ id }) => id));
      setBtc(newData.find(({ id }) => id === 'bitcoin'));
      setSelected(selectedData);
      setTrending(trendingData);
    }
    getData();
  }, []);
  return (
    <PriceContext.Provider value={{ btc, setBtc, selected, setSelected, trending, setTrending }}>
      {children}
    </PriceContext.Provider>
  );
};

const withPrice = (Child) => (props) => (
  <PriceContext.Consumer>
    {(context) => <Child {...props} priceContext={context} />}
  </PriceContext.Consumer>
);

export { PriceProvider, withPrice };