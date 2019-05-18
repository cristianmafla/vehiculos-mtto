import { gql } from 'apollo-server-express';

export default gql`

scalar Date

type Query {


}

type Mutation {
    """ SET IPOs today API <api.iextrading.com> """
    setTodayIpo():[IPOinfo]
}

type IPOinfo {
    
}
` ;