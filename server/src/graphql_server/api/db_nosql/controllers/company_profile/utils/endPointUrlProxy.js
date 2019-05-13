import axios from 'axios';
import { companyProfileUrlProxy } from '../../../../utils/apiUrls';
import { serverProxy } from '../../../../utils/proxy';

export const companiesUrlApiProxy = async tickers => {
    const {port,serverproxy} = serverProxy();
    const companies = await tickers.map((ticker) => axios.get(companyProfileUrlProxy(port, ticker)));
    return { companies, serverproxy, port };
};

