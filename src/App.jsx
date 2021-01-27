import MainTable from './components/MainTable'
import TrendingTable from './components/TrendingTable'
import Layout from './components/Layout'
import Home from './components/HomeScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

const App = props => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/trending">
            <TrendingTable />
          </Route>
          <Route path="/selected">
            <MainTable />
          </Route>
          <Route path="/:coin">
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
