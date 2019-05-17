import { setCompanyProfile, setCompanyProfileProxy } from '../api/db_nosql/controllers/companies_profile';

export default {

    Query:{

        getCompanyProfile:() => 'CADENA DE RESPUESTA'

    },

    Mutation: {

        setCompanyProfile: (_, { init, limit }) => setCompanyProfile(init, limit),

        setCompanyProfileProxy: (_, { init, limit }) => setCompanyProfileProxy(init, limit),
    }
};