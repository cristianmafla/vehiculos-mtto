import { getApiCompanies } from './utils/endPointUrl';
import { getSave } from './utils';


//COMPANIES PROFILE
export const setTodayIPO = () => {
    return getApiCompanies().then(data => getSave(data));
};


