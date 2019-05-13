import axios from 'axios';
import { companyProfileUrl } from '../../../../utils/apiUrls';

export const companiesUrlApi = tickers => tickers.map((ticker) => axios.get(companyProfileUrl(ticker)));