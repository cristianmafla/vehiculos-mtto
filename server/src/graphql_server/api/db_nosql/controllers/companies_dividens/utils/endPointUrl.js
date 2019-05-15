import axios from 'axios';
import { companyDividendsUrl } from '../../../../utils/apiUrls';

<<<<<<< HEAD
export const companyDividends = (symbols, range) => symbols.map(symbol => {
    return {
        dividens: axios.get(companyDividendsUrl(symbol, range)),
        ticker:symbol
    };
});
=======
export const companyDividends = (symbol, range) => axios.get(companyDividendsUrl(symbol, range));
>>>>>>> dcd424f054b2d6f45ca9557284b5ab6ad9190c04
