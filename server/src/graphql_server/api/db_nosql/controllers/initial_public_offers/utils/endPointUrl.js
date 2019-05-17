import axios from 'axios';
import { companiesIPO } from '../../../../utils/apiUrls';

export const getApiCompanies = symbols => symbols.map(symbol => axios.get(companiesIPO(symbol)));