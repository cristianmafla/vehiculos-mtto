import { gql } from 'apollo-server-express';

export default gql`

scalar Date

type Query {

    """ EXAMPLE QUERY SCHEMA """
    anyQuery:String

}

type Mutation {

    """ EXAMPLE MUTATION SCHEMA """
    anyMutation(parameter:String):anyObjet
}

type anyObjet {
    parameter1:String
    parameter2:Int
}
` ;