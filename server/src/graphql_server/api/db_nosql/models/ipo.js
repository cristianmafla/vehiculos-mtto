import mongoose from '../config/database';

const schema = new mongoose.Schema({
    rawData: [
        {
            symbol: {
                type: String,
                required:false,
                trim: true,
                lowercase:true,
                unique:false,
                validate:() => { }
            },
            companyName:{
                type: String,
                default: false,
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            expectedDate: {
                type: String,
                default:false,
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            leadUnderwriters: {
                type: [String],
                default: ['',''],
                trim: true,
                validate: () => { }
            },
            underwriters: {
                type: [String],
                default: ['',''],
                trim: true,
                validate: () => { }
            },
            companyCounsel: {
                type: [String],
                default: ['',''],
                trim: true,
                validate: () => { }
            },
            underwriterCounsel: {
                type: [String],
                default: ['',''],
                trim: true,
                validate: () => { }
            },
            auditor:{
                type: String,
                default:false,
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            market: {
                type: String,
                default: false,
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            cik:{
                type: String,
                required:false,
                default: false,
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            address:{
                type: String,
                default: false,
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            city:{
                type: String,
                default:false,
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            state: {
                type: String,
                required:false,
                default:false,
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            zip:{
                type: String,
                required:false,
                default:false,
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            phone:{
                type: String,
                default: false,
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            ceo:{
                type: String,
                default: false,
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            employees:{
                type: Number,
                default: 0,
                trim: true,
                validate: () => { }
            },
            url:{
                type: String,
                default:false,
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            status:{
                type: String,
                default:false,
                trim: true,
                lowercase:true,
                unique:false,
                validate:() => { }
            },
            sharesOffered:{
                type: Number,
                default: 0,
                trim: true,
                validate: () => { }
            },
            priceLow:{
                type: Number,
                default: 0,
                trim: true,
                validate: () => { }
            },
            priceHigh:{
                type: Number,
                default: 0,
                trim: true,
                validate: () => { }
            },
            offerAmount:{
                type: Number,
                default: 0,
                trim: true,
                validate: () => { }
            },
            totalExpenses:{
                type: Number,
                default: 0,
                trim: true,
                validate: () => { }
            },
            sharesOverAlloted:{
                type: Number,
                default: 0,
                trim: true,
                validate: () => { }
            },
            shareholderShares: {
                type: Number,
                default: 0,
                trim: true,
                validate: () => { }
            },
            sharesOutstanding:{
                type: Number,
                default: 0,
                trim: true,
                validate: () => { }
            },
            lockupPeriodExpiration:{
                type: String,
                default:false,
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            quietPeriodExpiration:{
                type: String,
                default:false,
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            revenue:{
                type: Number,
                default: 0,
                trim: true,
                validate: () => { }
            },
            netIncome:{
                type: Number,
                default: 0,
                trim: true,
                validate: () => { }
            },
            totalAssets:{
                type: Number,
                default: 0,
                trim: true,
                validate: () => { }
            },
            totalLiabilities:{
                type: Number,
                default: 0,
                trim: true,
                validate: () => { }
            },
            stockholderEquity:{
                type: Number,
                default: 0,
                trim: true,
                validate: () => { }
            },
            companyDescription:{
                type: String,
                default:'',
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            businessDescription:{
                type: String,
                default:'',
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            useOfProceeds:{
                type: String,
                default:'',
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            competition:{
                type: String,
                default:'',
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            amount: {
                type: Number,
                default: '',
                trim: true,
                validate: () => { }
            },
            percentOffered: {
                type: String,
                default:'',
                trim: true,
                lowercase:true,
                unique:false,
                validate:() => { }
            },
        }
    ],
    viewData: [
        {
            Company:{
                type: String,
                default:'',
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            Symbol:{
                type: String,
                default:'',
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            Price: {
                type: String,
                default:'',
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            Shares: {
                type: String,
                default:'',
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            Amount: {
                type: String,
                default:'',
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            Float:{
                type: String,
                default:'',
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            Percent:{
                type: String,
                default:'',
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            Market:{
                type: String,
                default:'',
                trim: true,
                lowercase:true,
                validate:() => { }
            },
            Expected: {
                type:Date,
                trim: true,
                validate: () => { }
            },
        }
    ]
});

export const ipo = mongoose.model('ipo', schema);