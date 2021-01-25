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
          <div className="links">
            <button className={`nav-btn is-${active}`} onClick={() => handleClick('trending')}>Trending</button>
            <button className={`nav-btn is-${active}`} onClick={() => handleClick('selected')}>Selected</button>
          </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  .nav {
    box-sizing: border-box;
    width: 100%;
    max-width: 968px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 12px 32px;
    align-items: center;
    margin-bottom: 24px;
    @media (max-width: 420px) {
      justify-content: center;
    }
    &-btn {
      box-sizing: padding-box;
      cursor: pointer;
      border: none;
      outline: none;
      font-size: 16px;
      width: 100px;
      height: 50px;
      background-color: transparent;
      color: steelblue;
      mix-blend-mode: difference;
      font-weight: bold;
      &:hover {
        text-decoration: underline;
        filter: brightness(120%);
        transition: all ease-in-out 100ms;
      }
    }
  }
`;
