//import {  } from '../api/db_nosql/controllers/.....';

export default {

    Query: {

        anyQuery: (_,{parameter}) => 'DATO DE RESPUESTA SERVER GRAPHQL http://localhost:3000/graphql',

    },

    Mutation: {

        anyMutation: (_, { parameter }) => 'result mutation',
    }
};