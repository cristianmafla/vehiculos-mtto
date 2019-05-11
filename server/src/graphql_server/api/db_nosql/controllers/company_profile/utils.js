import axios from 'axios';
export const companiesUrlAPI = tickers => (
    tickers.map((ticker) => (
        axios({
            method: 'get',
            url: `https://api.iextrading.com/1.0/stock/${ticker}/company`,
            responseType: 'json'
        })
    ))
)
export const errorAxios = error => {
    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log('Error', error.message);
    }
    console.log(error.config);
};