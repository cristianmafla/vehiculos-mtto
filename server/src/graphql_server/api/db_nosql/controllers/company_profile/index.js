import { companiesUrlApiProxy } from './utils/endPointUrlProxy';
import { companiesUrlApi } from './utils/endPointUrl';
import { getSave } from './utils'
import { paginationTickers } from '../../../utils/tickers';

//COMPANIES PROFILE
export const setCompanyProfile = (init = 1, limit = 1) => {
    const tickers = paginationTickers(init, limit);
    return companiesUrlApi(tickers).map(company => company.then(data => getSave(data)));
};
//COMPANIES PROFILE PROXY
export const setCompanyProfileProxy =  (init = 1, limit = 1) => {
    const tickers = paginationTickers(init, limit);
    return companiesUrlApiProxy(tickers).then(({ companies, serverproxy, port}) => {
        let i = 0 ;
        return companies.map(company => company.then(data => {
            if(i === 0){
                serverproxy.close();
                console.log(`server proxy CLOSED http://localhost${port}`);
                i = 1;
            }
            return getSave(data)
        }))
    });
};

