import fs from 'fs';
import { GraphQLUpload } from 'graphql-upload';
import { setCompanyProfile, setCompanyProfileProxy } from '../api/db_nosql/controllers/company_profile';

const resolvers = {

    Upload: GraphQLUpload,

    Query:{

        getCompanyProfile:() => 'getCompanyProfile'

    },

    Mutation: {

        setCompanyProfile: (_, { init, limit }) => setCompanyProfile(init, limit),

        setCompanyProfileProxy: (_, { init, limit }) => setCompanyProfileProxy(init, limit),
    }
};
export default resolvers;