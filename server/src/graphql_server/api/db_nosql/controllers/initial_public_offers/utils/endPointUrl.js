import axios from 'axios';
import { companiesIPO } from '../../../../utils/apiUrls';

export const companiesUrlApi = tickers => tickers.map((ticker) => axios.get(companiesIPO(ticker)));