import { gql } from 'apollo-server-express';

export default gql`

scalar Date

type Mutation {

    """ SET IPOs today API <api.iextrading.com> """
    setTodayIpo:IPOinfo

}

type IPOinfo {
    rawData:[RawData]
    viewData:[ViewData]
}

type RawData {
    symbol:String
    companyName:String
    expectedDate:Date
    leadUnderwriters:[String]
    underwriters:[String]
    companyCounsel:[String]
    underwriterCounsel:[String]
    auditor:String
    market:String
    cik:String
    address:String
    city:String
    state:String
    zip:String
    phone:String
    ceo:String
    employees:Int
    url:String
    status:String
    sharesOffered:Int
    priceLow:Int
    priceHigh:Int
    offerAmount:Int
    totalExpenses:Int
    sharesOverAlloted:Int
    shareholderShares:Int
    sharesOutstanding:Int
    lockupPeriodExpiration:String
    quietPeriodExpiration:String
    revenue:Int
    netIncome:Int
    totalAssets:Int
    totalLiabilities:Int
    stockholderEquity:Int
    companyDescription:String
    businessDescription:String
    useOfProceeds:String
    competition:String
    amount:Int
    percentOffered:String
}

type ViewData {
    Company:String
    Symbol:String
    Price:String
    Shares:String
    Amount:String
    Float:String
    Percent:String
    Market:String
    Expected:Date
}
` ;


