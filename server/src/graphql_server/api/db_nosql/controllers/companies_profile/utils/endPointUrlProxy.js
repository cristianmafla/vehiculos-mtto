import axios from 'axios';
import { companyProfileUrlProxy } from '../../../../utils/apiUrls';
import { serverProxy } from '../../../../utils/proxy';

export const getApiCompaniesProfileProxy = symbols => {
    const {port,serverproxy} = serverProxy();
    return new Promise((resolve,reject) => {
        let
            i = 0,
            totalSymbols = symbols.length,
            companies = [];

        symbols.map(symbol => {
            setTimeout(() => {
                i = i + 1 ;
                if (i >= totalSymbols){
                    resolve({
                        companies,
                        port,
                        serverproxy
                    });
                };
                companies.push(axios.get(companyProfileUrlProxy(port, symbol)));
            }, 10);//modificador tiempo entre consultas*****
        });
    });
};

