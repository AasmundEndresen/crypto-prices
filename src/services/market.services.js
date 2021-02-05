import axios from 'axios';
import { ids } from '../config/marketService.config';

const api = process.env.REACT_APP_API;

export const getMarketData = async function (selection) {
  const config = selection ?? ids.split(',');
  try {
    const options = `vs_currency=usd&ids=${config}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
    const response = await axios.get(`${api}/coins/markets?${options}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export const getTrendingAssets = async function () {
  try {
    const response = await axios.get(`${api}/search/trending`);
    return response.data.coins.map(({ item }) => item);
  } catch (err) {
    console.log(err);
  }
}