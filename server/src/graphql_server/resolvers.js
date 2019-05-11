import fs from 'fs';
import { GraphQLUpload } from 'graphql-upload';
import {getOneCompanyProfile} from './api/db_nosql/controllers/company_profile';

const resolvers = {

    Upload: GraphQLUpload,

    Query: {

        getOneCompanyProfile: (_, { ticker }) => getOneCompanyProfile(ticker)

    }
};

export { resolvers };