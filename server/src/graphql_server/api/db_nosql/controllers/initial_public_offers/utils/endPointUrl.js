import axios from 'axios';
import { companyTodayIPO } from '../../../../utils/apiUrls';

export const getApiCompanies = () => axios.get(companyTodayIPO());