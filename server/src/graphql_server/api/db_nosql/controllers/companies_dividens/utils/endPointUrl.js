import axios from 'axios';
import { companyDividendsUrl } from '../../../../utils/apiUrls';

export const getApiCompanyDividends = (symbol, range) => axios.get(companyDividendsUrl(symbol, range));
