import { getApiCompanies } from './utils/endPointUrl';
import { getSave } from './utils'
import { paginationSymbols } from '../../../utils/symbolsCompany';

//COMPANIES PROFILE
export const setIPO = (init = 1, limit = 1) => {
    const symbols = paginationSymbols(init, limit);
    return getApiCompanies(symbols).map(company => company.then(data => getSave(data)));
};


