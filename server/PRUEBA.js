const axios = require('axios');

const api = () => {
<<<<<<< HEAD
    axios.get('https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb&types=quote')
        .then(({data}) => console.log('DATA API',data))
        .catch(error => console.log('error axios',error))
}

=======
    const proxy = {
        host: '134.119.207.13',
        port: 8080
    };

    axios.get('https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb&types=quote',{proxy})
    .then(data => console.log('data',data))
    .catch(error => console.log('error',error));
}
>>>>>>> dcd424f054b2d6f45ca9557284b5ab6ad9190c04
api();