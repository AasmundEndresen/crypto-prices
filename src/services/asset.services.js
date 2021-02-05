import axios from 'axios';

const api = process.env.REACT_APP_API;

export const getAssetData = async function (id) {
  try {
    const options = `${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`;
    const response = await axios.get(`${api}/coins/${options}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export const getAssetList = async function () {
  try {
    const options = `list`;
    const response = await axios.get(`${api}/coins/${options}`);
    return response;
  } catch (err) {
    console.log(err);
  }
}