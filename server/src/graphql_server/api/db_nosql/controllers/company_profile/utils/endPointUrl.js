import axios from 'axios';
import { companyProfileUrl } from '../../../../utils/apiUrls';

export const companiesUrlApi = tickers => (
    tickers.map((ticker) => (
        axios({
            method: 'get',
            url: companyProfileUrl(ticker),
            responseType: 'json'
        })
    ))
)