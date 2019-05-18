import { setTodayIPO } from '../api/db_nosql/controllers/initial_public_offers';

export default {

    Query:{

        //getCompanyProfile:() => 'RESPONSE STRING'

    },

    Mutation: {

        setTodayIpo: (_,args) => setTodayIPO()

    }
};

