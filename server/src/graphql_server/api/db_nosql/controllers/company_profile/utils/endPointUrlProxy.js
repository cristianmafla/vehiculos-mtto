import axios from 'axios';
import { companyProfileUrlProxy } from '../../../../utils/apiUrls';
import { serverProxy } from '../../../../utils/proxy';

export const companiesUrlApiProxy =  tickers => {
    const {port,serverproxy} = serverProxy();
    return new Promise((resolve,reject) => {
        let
            i = 0,
            totalTickers = tickers.length,
            companies = [];

        tickers.map((ticker) => {
            setTimeout(() => {
                i = i + 1 ;
                if(i >= totalTickers){
                    resolve({
                        companies,
                        port,
                        serverproxy
                    });
                }
                companies.push(axios.get(companyProfileUrlProxy(port, ticker)))
            }, 10);
        });
    });
};

/*
export const companiesUrlApiProxy = async tickers => {
    const { port, serverproxy } = serverProxy();
    const companies = await tickers.map((ticker) => axios.get(companyProfileUrlProxy(port, ticker)));
    return { companies, serverproxy, port };
};
*/

