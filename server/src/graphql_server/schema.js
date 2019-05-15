export default `
scalar Date

type Query {

    pruebaQuery:String
}

type Mutation {

    """ SET COMPANIES PROFILE API <api.iextrading.com> """
    setCompanyProfile(init:Int,limit:Int):[CompanyProfile]

    """ SET COMPANIES PROFILE API WITH PROXY <api.iextrading.com>"""
    setCompanyProfileProxy(init:Int,limit:Int):[CompanyProfile]

    """ SET COMPANIES DIVIDENS API <api.iextrading.com>"""
    setCompanyDividens(init:Int,limit:Int,range:String,symbol:String):[[CompanyDividens]]
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
`;