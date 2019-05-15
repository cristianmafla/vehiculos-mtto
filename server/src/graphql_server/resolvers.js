import fs from 'fs';
import { GraphQLUpload } from 'graphql-upload';
import { setCompanyProfile, setCompanyProfileProxy } from './api/db_nosql/controllers/company_profile';
import { setCompanyDividens } from './api/db_nosql/controllers/companies_dividens';

const resolvers = {

    Upload: GraphQLUpload,

    Query: {

        setCompanyProfile: (_, { init, limit }) => setCompanyProfile(init, limit),
        setCompanyProfileProxy: (_, { init, limit }) => setCompanyProfileProxy(init, limit),

    },
    Mutation: {

        setCompanyDividens: (_, { range,symbol }) => setCompanyDividens( range, symbol)
    }
};
export { resolvers }; 