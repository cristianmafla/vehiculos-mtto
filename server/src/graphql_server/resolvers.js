import fs from 'fs';
import { GraphQLUpload } from 'graphql-upload';
import {getCompanyProfile} from './api/db_nosql/controllers/company_profile';

const resolvers = {

    Upload: GraphQLUpload,

    Query: {

        getCompanyProfile: (_, { init, limit }) => getCompanyProfile(init, limit)

    }
};
//cambio este
export { resolvers };