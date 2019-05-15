import { companyProfile } from '../../../models/company_profile';
import { errorHttp } from '../../utils';

export const getSave = ({ status, data }) => {
    if (status === 200){
        companyProfile.create(data,(error,result) => error ? console.log('error',error):null);
        return data;
    };
    console.log(errorHttp(status));
};

//new companyProfile(data).save()