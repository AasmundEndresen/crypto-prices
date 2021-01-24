const fs = require('fs');
const axios = require('axios').default;

const api = 'https://api.coingecko.com/api/v3';

axios.get(`${api}/coins/list`)
  .then(function (response) {
    const data = response.data;
    fs.writeFileSync('src/assets/coins.json', JSON.stringify(data));
  })
  .catch(function (error) {
    console.log(error)
  })
