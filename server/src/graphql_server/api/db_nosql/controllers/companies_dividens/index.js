<<<<<<< HEAD
import { paginationTickers } from '../../../utils/tickers';
import { companyDividends } from './utils/endPointUrl';
import { getSave } from './utils';

export const setCompanyDividens = (init = 1, limit = 1,range = '1y',symbol = null) => {
    const symbols = (symbol === null) ? paginationTickers(init, limit) : [symbol];
    return companyDividends(symbols, range).map(({ dividens, ticker }) => dividens.then(data => getSave(data, ticker)));
=======
import { companyDividends } from './utils/endPointUrl';
import { getSave } from './utils'

export const setCompanyDividens = (range = '1y',symbol = 'AAPL') => {
    return companyDividends(symbol, range).then(req => getSave(req,symbol));
>>>>>>> dcd424f054b2d6f45ca9557284b5ab6ad9190c04
};