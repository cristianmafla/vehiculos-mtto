import { companyDividends } from './utils/endPointUrl';
import { getSave } from './utils'

export const setCompanyDividens = (range = '1y',symbol = 'AAPL') => {
    return companyDividends(symbol, range).then(req => getSave(req,symbol));
};