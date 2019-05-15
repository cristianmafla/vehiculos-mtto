
import { gql } from 'apollo-server-express';

export default gql`

type Mutation {

    """ SET COMPANIES PROFILE API <api.iextrading.com> """
    setCompanyDividens(range:String,symbol:String):[CompanyDividens]

}

type CompanyDividens {
    symbol:String
    exDate: Date
    paymentDate: Date
    recordDate:Date
    declaredDate:Date
    amount:Float
    type:String
    qualified:String
}
` ;
