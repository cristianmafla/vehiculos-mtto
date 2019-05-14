import { companyProfile } from '../../../models/company_profile';
import { errorHttp } from '../../utils';

export const getSave = ({ status, data }) => {
    if (status === 200) return new companyProfile(data).save();
    console.log(errorHttp(status));
};