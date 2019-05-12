import axios from 'axios';
import { companyProfileUrlProxy } from '../../../../utils/apiUrls';
import { serverProxy } from '../../../../utils/proxy';

export const companiesUrlApiProxy = tickers => {
    return new Promise((resolve,reject) => {
        serverProxy().then(({ port, serverproxy }) => {
            const companyProfile = tickers.map((ticker) => (
                axios({
                    method: 'get',
                    url: companyProfileUrlProxy(port, ticker),
                    responseType: 'json'
                })
            ));
            resolve(companyProfile);
        });
    });
};