export default `
scalar Date

type Query {

    """ GET ONE COMPANY PROFILE """
    getOneCompanyProfile(ticker:String):CompanyProfile
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
}

`;