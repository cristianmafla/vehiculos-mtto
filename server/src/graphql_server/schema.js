export default `
scalar Date

type Query {

    """ SET COMPANIES PROFILE API <api.iextrading.com> """
    setCompanyProfile(init:Int,limit:Int):[CompanyProfile]

    """ SET COMPANIES PROFILE API WITH PROXY <api.iextrading.com>"""
    setCompanyProfileProxy(init:Int,limit:Int):[CompanyProfile]
}

type Mutation {

    """ SET COMPANIES DIVIDENS API WITH PROXY <api.iextrading.com>"""
<<<<<<< HEAD
    setCompanyDividens(init:Int,limit:Int,range:String,symbol:String):[[CompanyDividens]]
=======
    setCompanyDividens(range:String,symbol:String):[CompanyDividens]
>>>>>>> dcd424f054b2d6f45ca9557284b5ab6ad9190c04
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