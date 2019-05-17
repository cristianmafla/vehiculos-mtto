import { setCompanyDividens } from '../api/db_nosql/controllers/companies_dividens';

export default {

    Mutation: {

        setCompanyDividens: (_, { range, symbol }) => setCompanyDividens(range, symbol)
    }
};
