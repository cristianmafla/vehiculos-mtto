const axios = require('axios');

const api = () => {
    axios.get('https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb&types=quote')
        .then(({data}) => console.log('DATA API',data))
        .catch(error => console.log('error axios',error))
}

api();