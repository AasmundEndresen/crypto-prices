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