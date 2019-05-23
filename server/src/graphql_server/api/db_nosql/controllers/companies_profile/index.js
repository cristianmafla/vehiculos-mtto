import { getApiCompaniesProfileProxy } from './utils/endPointUrlProxy';
import { getApiCompaniesProfile } from './utils/endPointUrl';
import { getSave } from './utils'
import { paginationSymbols } from '../../../utils/symbolsCompany';

//COMPANIES PROFILE
export const setCompanyProfile = (init, limit) => {
    const symbols = paginationSymbols(init, limit);
    return getApiCompaniesProfile(symbols).map(company => company.then(data => getSave(data)));
};

//COMPANIES PROFILE PROXY
export const setCompanyProfileProxy =  (init , limit) => {
    const symbols = paginationSymbols(init, limit);
    return getApiCompaniesProfileProxy(symbols).then(({ companies, serverproxy, port}) => {
        let i = 0 ;
        return companies.map(company => company.then(data => {
            if(i === 0){
                serverproxy.close();
                console.log(`*** SERVER PROXY CLOSED http://localhost${port} ***`);
                i = 1;
            }
            return getSave(data)
        }))
    });
};

