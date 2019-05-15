const axios = require('axios');

const api = () => {
    const proxy = {
        host: '134.119.207.13',
        port: 8080
    };

    axios.get('https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb&types=quote',{proxy})
    .then(data => console.log('data',data))
    .catch(error => console.log('error',error));
}
api();