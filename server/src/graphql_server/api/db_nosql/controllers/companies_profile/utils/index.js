import { companyProfile } from '../../../models/company_profile';
import { errorHttp } from '../../utils';

export const getSave = async ({ status, data }) => {
    if (status === 200) {
        companyProfile.create(data, (error, result) => error ? console.log('error', error) : null);
        return data;
    };
    console.log(errorHttp(status));
};