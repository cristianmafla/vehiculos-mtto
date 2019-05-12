import { companyProfile } from '../../models/company_profile';
import { companiesUrlApiProxy } from './utils/endPointUrlProxy';
import { companiesUrlApi } from './utils/endPointUrl';
import { errorHttp } from './utils'
import { paginationTickers } from '../../../utils/tickers';

//COMPANIES PROFILE
export const getCompanyProfile = (init = 1, limit = 1) => {
    const tickers = paginationTickers(init, limit);
    return companiesUrlApi(tickers).map(company => company.then(({ status, data }) => {
        if (status === 200) {
            new companyProfile(data).save();
            return data;
        }
        console.log(errorHttp(status));
        return [];
    }));
};
//COMPANIES PROFILE PROXY
export const getCompanyProfileProxy = (init = 1, limit = 1) => {
    const tickers = paginationTickers(init, limit);
    return companiesUrlApiProxy(tickers).then(data => (
        data.map(company => company.then(({ status, data }) => {
            if (status === 200) {
                new companyProfile(data).save();
                return data;
            } else {
                console.log(errorHttp(status));
                return [];
            }
        }))
    ));
};

