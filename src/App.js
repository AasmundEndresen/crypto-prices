import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Switch, Route, NavLink } from 'react-router-dom'
import routes from './app.routes'
import Donations from './components/Donations'

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
        <Donations />
      </header>
      <Switch>
        {routes.map((r, i) => (<Route path={r.path} component={r.component} key={i} />))}
      </Switch>
    </div>
  );
}

App.propTypes = {
  className: PropTypes.string.isRequired,
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
