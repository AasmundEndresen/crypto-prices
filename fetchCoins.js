const fs = require('fs');
const axios = require('axios').default;

const api = 'https://api.coingecko.com/api/v3';

axios.get(`${api}/coins/list`)
  .then(function (response) {
    const ids = response.data.map(({ id }) => id).filter(id => !/short|long|expiring|weight|range|demand|btc-|wrapped|trump|tron|wallet|aave-|basis-|basid-|bitcoin-|bitconnect|blockchain/gi.test(id));
    fs.writeFileSync('test.txt', ids.join(',\n'));
  })
  .catch(function (error) {
    console.log(error)
  })
