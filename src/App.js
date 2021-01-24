import { useState } from 'react'
import styled from 'styled-components'
import { PriceProvider } from './context/priceContext'
import MainTable from './components/MainTable'
import TrendingTable from './components/TrendingTable'
import CoinSelect from './components/CoinSelect'

function App({ className }) {
  const [component, setComponent] = useState(MainTable);
  const [active, setActive] = useState('selected');
  const handleClick = function (type) {
    setActive(type);
    setComponent(type === 'trending' ? TrendingTable : MainTable);
  };
  return (
    <PriceProvider>
      <header className={className} component={component}>
        <nav className="nav">
          <button className={`nav-btn is-${active}`} onClick={() => handleClick('trending')}>Trending</button>
          <button className={`nav-btn is-${active}`} onClick={() => handleClick('selected')}>Selected</button>
          <div className="addcoin">
            <CoinSelect />
          </div>
        </nav>
      </header>
      {component}
    </PriceProvider>
  );
}

export default styled(App)`
  .nav {
    box-sizing: border-box;
    width: 100%;
    padding: 24px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &-btn {
      box-sizing: padding-box;
      cursor: pointer;
      border: none;
      outline: none;
      font-size: 20px;
      width: 200px;
      height: 50px;
      background-color: white;
      color: steelblue;
      font-weight: bold;
      &:hover {
        text-decoration: underline;
        filter: brightness(120%);
        transition: all ease-in-out 100ms;
      }
    }
  }
`;
