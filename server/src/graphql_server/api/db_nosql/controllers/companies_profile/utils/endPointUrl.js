import axios from 'axios';
import { companyProfileUrl } from '../../../../utils/apiUrls';

export const getApiCompaniesProfile = symbols => symbols.map(symbol => axios.get(companyProfileUrl(symbol)));