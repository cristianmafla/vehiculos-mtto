import fs from 'fs';
import { GraphQLUpload } from 'graphql-upload';
import {
    getCompanyProfile,
    getCompanyProfileProxy
    } from './api/db_nosql/controllers/company_profile';

const resolvers = {

    Upload: GraphQLUpload,

    Query: {

        getCompanyProfile: (_, { init, limit }) => getCompanyProfile(init, limit),

        getCompanyProfileProxy: (_, { init, limit }) => getCompanyProfileProxy(init, limit),

    }
};
export { resolvers };