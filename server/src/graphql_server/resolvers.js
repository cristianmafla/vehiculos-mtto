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

<<<<<<< HEAD
        setCompanyDividens: (_, { init, limit, range,symbol }) => setCompanyDividens(init, limit, range, symbol)
    }

};
export { resolvers };

//test please ple
=======
        setCompanyDividens: (_, { range,symbol }) => setCompanyDividens( range, symbol)
    }
};
export { resolvers }; 
>>>>>>> dcd424f054b2d6f45ca9557284b5ab6ad9190c04
