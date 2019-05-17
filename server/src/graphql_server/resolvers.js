import fs from 'fs';
import { GraphQLUpload } from 'graphql-upload';
import { setCompanyProfile, setCompanyProfileProxy } from './api/db_nosql/controllers/company_profile';
import { setCompanyDividens } from './api/db_nosql/controllers/companies_dividens';

const resolvers = {

    Upload: GraphQLUpload,

    Query: {
        pruebaQuery:(_, args)  => 'Prueba query'
    },

    Mutation: {

        setCompanyProfile: (_, { init, limit }) => setCompanyProfile(init, limit),
        setCompanyProfileProxy: (_, { init, limit }) => setCompanyProfileProxy(init, limit),

        setCompanyDividens: (_, { range, symbol }) => setCompanyDividens(range, symbol),

        

    }
};
export { resolvers };
