import { getApiCompanyDividends } from './utils/endPointUrl';
import { getSave } from './utils'

export const setCompanyDividens = (range = '1y',symbol = 'AAPL') => {
    return getApiCompanyDividends(symbol, range).then(req => getSave(req,symbol));
};