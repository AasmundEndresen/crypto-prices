import styled from 'styled-components'

import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import routes from './app.routes'
import { Navigation, Donations } from './components'

function App({ className }) {
  return (
    <div className={className}>
      <header>
        <Navigation />
      </header>
      <Donations />
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
  header {
    width: 100%;
    padding: 24px;
    position: sticky;
    z-index: 100;
    top: 0;
  }
`;
