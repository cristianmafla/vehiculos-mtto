import { gql } from 'apollo-server-express';

export default gql`

scalar Date

type Query {

    """ GET COMPANIES PROFILE """
    getCompanyProfile:String

}

type Mutation {

    """ SET COMPANIES PROFILE API <api.iextrading.com> """
    setCompanyProfile(init:Int,limit:Int):[CompanyProfile]

    """ SET COMPANIES PROFILE API WITH PROXY <api.iextrading.com>"""
    setCompanyProfileProxy(init:Int,limit:Int):[CompanyProfile]
}

type CompanyProfile {
    symbol:String
    companyName:String
    exchange:String
    industry:String
    website:String
    description:String
    CEO:String
    issueType:String
    sector:String
    tags:[String]
}
` ;