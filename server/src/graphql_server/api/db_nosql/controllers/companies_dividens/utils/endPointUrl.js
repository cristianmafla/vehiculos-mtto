import axios from 'axios';
import { companyDividendsUrl } from '../../../../utils/apiUrls';

export const companyDividends = (symbol, range) => axios.get(companyDividendsUrl(symbol, range));
