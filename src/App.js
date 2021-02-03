import styled from 'styled-components'
import { Switch, Route, NavLink } from 'react-router-dom'
import routes from './app.routes'
import { ReactComponent as Btc } from './assets/btc.svg'
import { ReactComponent as Xlm } from './assets/xlm.svg'
import { ReactComponent as Eth } from './assets/eth.svg'

function App({ className }) {
  return (
    <div className={className}>
      <header>
        <nav className="nav">
          <div className="links">
            <NavLink to="/trending">Trending</NavLink>
            <NavLink to="/selected">Selected</NavLink>
          </div>
        </nav>
        <div className="donations">
          <h2>Donations</h2>
          <div>
            <span className="asset">BTC</span>
            <Btc className="qr" />
          </div>
          <div>
            <span className="asset">ETH/ERC20</span>
            <Eth className="qr" />
          </div>
          <div>
            <span className="asset">XLM</span>
            <Xlm className="qr" />
          </div>
        </div>
      </header>
      <Switch>
        {routes.map((r, i) => (<Route path={r.path} component={r.component} key={i} />))}
      </Switch>
    </div>
  );
}

export default styled(App)`
  display: flex;
  flex-direction: column;
  align-items: center;
  .donations {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 12px;
    h2 {
      margin: 0;
      padding: 0;
      line-height: 1;
      text-align: center;
      font-size: 20px;
      width: 100%;
      mix-blend-mode: soft-light;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 12px;
    }
    .asset {
      font-size: 14px;
      font-weight: bold;
      padding: 0;
      margin: 0;
      color: blue;
      mix-blend-mode: soft-light;
    }
    .qr {
      width: 100px;
      mix-blend-mode: soft-light;
    }
  }
  .nav {
    box-sizing: border-box;
    width: 100%;
    max-width: 968px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 12px 32px;
    align-items: center;
    @media (max-width: 420px) {
      justify-content: center;
    }
    a {
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
