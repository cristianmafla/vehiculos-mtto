import { companyProfile } from '../../models/company_profile';
import { companiesUrlAPI, errorHttp } from './utils';
import { paginationTickers } from '../../../tickers';

export const getCompanyProfile =  (init = 1,limit = 1) => {
    const tickers = paginationTickers(init,limit);
    return companiesUrlAPI(tickers).map(company => company.then(({status,data}) => {
        if(status === 200){
            new companyProfile(data).save();
            return data;
        }
        console.log(errorHttp(status));
        return [];
    }));
};

