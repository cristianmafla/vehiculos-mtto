import { paginationTickers } from '../../../utils/tickers';
import { companyDividends } from './utils/endPointUrl';
import { getSave } from './utils';

export const setCompanyDividens = (init = 1, limit = 1,range = '1y',symbol = null) => {
    const symbols = (symbol === null) ? paginationTickers(init, limit) : [symbol];
    return companyDividends(symbols, range).map(({ dividens, ticker }) => dividens.then(data => getSave(data, ticker)));
};