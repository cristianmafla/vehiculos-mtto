import axios from 'axios';
import {errorAxios} from './utils';
import { companyProfile } from '../../models/company_profile';

export const getOneCompanyProfile = (ticker) => {
    return new Promise((resolve,reject) => {
        axios({
            method: 'get',
            url: `https://api.iextrading.com/1.0/stock/${ticker}/company`,
            responseType: 'json'
        })
        .then(({ data }) => {
            const CompanyProfile = new companyProfile(data);
            CompanyProfile.save();
            resolve(data);
            console.log('Data Api iextrading', data)
        })
        .catch(error => errorAxios(error));
    });
};

