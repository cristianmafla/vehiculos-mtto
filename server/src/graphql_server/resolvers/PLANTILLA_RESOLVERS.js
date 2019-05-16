//import {  } from '../api/db_nosql/controllers/.....';

export default {

    Query: {

        anyQuery: (_,{parameter}) => 'result query',

    },

    Mutation: {

        anyMutation: (_, { parameter }) => 'result mutation',
    }
};