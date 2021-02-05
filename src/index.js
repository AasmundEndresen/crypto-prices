import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './configureStore';
import { fetchTrendingAssets, fetchSelectedAssets, fetchAssetList } from './features/assets/asset.slice';
import { ids } from './config/marketService.config';

const store = configureStore();

const selected = localStorage.getItem('ids') ?? ids;

store.dispatch(fetchAssetList());
store.dispatch(fetchTrendingAssets());
store.dispatch(fetchSelectedAssets(selected));

const renderApp = () => render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp)
}

renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
