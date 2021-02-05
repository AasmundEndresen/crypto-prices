import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import routes from './app.routes'
import { Navigation } from './components'
import { ReactComponent as Btc } from './assets/btc.svg'
import { ReactComponent as Xlm } from './assets/xlm.svg'
import { ReactComponent as Eth } from './assets/eth.svg'

function App({ className }) {
  return (
    <div className={className}>
      <header>
        <Navigation />
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
  header {
    width: 100%;
  }
  .donations {
    margin-top: 64px;
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
`;
