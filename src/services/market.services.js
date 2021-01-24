import axios from 'axios';
import { api, ids } from '../config/marketService.config';

export const getMarketData = async function () {
  try {
    const options = `vs_currency=usd&ids=${ids}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
    const response = await axios.get(`${api}/coins/markets?${options}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export const getCoinData = async function (id) {
  try {
    const options = `vs_currency=usd&ids=[${id}]&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
    const response = await axios.get(`${api}/coins/markets?${options}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export const getTrendingCoins = async function () {
  try {
    const response = await axios.get(`${api}/search/trending`);
    return response.coins.map(({ item }) => item);
  } catch (err) {
    console.log(err);
  }
}