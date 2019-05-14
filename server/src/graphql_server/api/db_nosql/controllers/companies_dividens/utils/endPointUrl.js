import axios from 'axios';
import { companyDividendsUrl } from '../../../../utils/apiUrls';

export const companyDividends = (symbols, range) => symbols.map(symbol => {
    return {
        dividens: axios.get(companyDividendsUrl(symbol, range)),
        ticker:symbol
    };
});