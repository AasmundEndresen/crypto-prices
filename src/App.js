import { useState, useEffect } from 'react';
import styled from 'styled-components'

import { getMarketData } from './services/market.services'

function App({ className }) {

  const [data, setData] = useState([]);
  const [btc, setBtc] = useState(0);

  useEffect(() => {
    async function getData() {
      const newData = await getMarketData();
      console.log(newData);
      setBtc(newData.find(({ id }) => id === 'bitcoin'));
      setData(newData);
    }
    getData();
  }, []);

  const getPriceAtBTCmcap = (el) => btc.market_cap / el.market_cap * el.current_price;
  const get1MamtAtBTCmcap = (el) => 1_000_000 / getPriceAtBTCmcap(el);
  const formatNum = (num) => num.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className={className}>
      <header className="App-header">
        <table className="list">
          <tr><th>Name</th><th>Required price</th><th>Amt for 1m</th><th>Amt to invest for 1m</th></tr>
          {data.map((el, index) => (
            <tr key={index}>
              <td className="name">{el.name}</td>
              <td className="price expected">{formatNum(getPriceAtBTCmcap(el))}</td>
              <td className="amt">{formatNum(get1MamtAtBTCmcap(el))}</td>
              <td className="price required">{formatNum(get1MamtAtBTCmcap(el) * el.current_price)}</td>
            </tr>
          ))}
        </table>
      </header>
    </div>
  );
}

export default styled(App)`
  text-align: center;
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .list {
    list-style: none;
    text-align: left;
    .name {
      text-transform: capitalize;
    }

    .price::before {
      content: ' $';
    }
    .expected {
      color: red;
    }
    .amt {
      color: yellow;
    }
    .required {
      color: green;
    }
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
