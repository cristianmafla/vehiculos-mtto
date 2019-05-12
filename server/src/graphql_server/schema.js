export default `
scalar Date

type Query {

    """ GET COMPANIES PROFILE API <api.iextrading.com>"""
    getCompanyProfile(init:Int,limit:Int):[CompanyProfile]

    """ GET COMPANIES PROFILE API WITH PROXY <api.iextrading.com>"""
    getCompanyProfileProxy(init:Int,limit:Int):[CompanyProfile]
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