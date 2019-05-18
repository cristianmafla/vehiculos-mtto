import mongoose from '../config/database';

const schema = new mongoose.Schema({
    rawData: [
        {
            symbol: {
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            companyName:{
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            expectedDate: {
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            leadUnderwriters: {
                type: [String],
                required: true,
                default: ['default-value1','default-value2'],
                trim: true,
                validate: () => { }
            },
            underwriters: {
                type: [String],
                required: true,
                default: ['default-value1','default-value2'],
                trim: true,
                validate: () => { }
            },
            companyCounsel: {
                type: [String],
                required: true,
                default: ['default-value1','default-value2'],
                trim: true,
                validate: () => { }
            },
            underwriterCounsel: {
                type: [String],
                required: true,
                default: ['default-value1','default-value2'],
                trim: true,
                validate: () => { }
            },
            auditor:{
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            market: {
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            cik:{
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            address:{
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            city:{
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            state: {
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            zip:{
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            phone:{
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            ceo:{
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            employees:{
                type: Number,
                required: false,
                default: '',
                trim: true,
                validate: () => { }
            },
            url:{
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            status:{
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            sharesOffered:{
                type: Number,
                required: false,
                default: '',
                trim: true,
                validate: () => { }
            },
            priceLow:{
                type: Number,
                required: false,
                default: '',
                trim: true,
                validate: () => { }
            },
            priceHigh:{
                type: Number,
                required: false,
                default: '',
                trim: true,
                validate: () => { }
            },
            offerAmount:{
                type: Number,
                required: false,
                default: '',
                trim: true,
                validate: () => { }
            },
            totalExpenses:{
                type: Number,
                required: false,
                default: '',
                trim: true,
                validate: () => { }
            },
            sharesOverAlloted:{
                type: Number,
                required: false,
                default: '',
                trim: true,
                validate: () => { }
            },
            shareholderShares: {
                type: Number,
                required: false,
                default: '',
                trim: true,
                validate: () => { }
            },
            sharesOutstanding:{
                type: Number,
                required: false,
                default: '',
                trim: true,
                validate: () => { }
            },
            lockupPeriodExpiration:{
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            quietPeriodExpiration:{
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            revenue:{
                type: Number,
                required: false,
                default: '',
                trim: true,
                validate: () => { }
            },
            netIncome:{
                type: Number,
                required: false,
                default: '',
                trim: true,
                validate: () => { }
            },
            totalAssets:{
                type: Number,
                required: false,
                default: '',
                trim: true,
                validate: () => { }
            },
            totalLiabilities:{
                type: Number,
                required: false,
                default: '',
                trim: true,
                validate: () => { }
            },
            stockholderEquity:{
                type: Number,
                required: false,
                default: '',
                trim: true,
                validate: () => { }
            },
            companyDescription:{
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            businessDescription:{
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            useOfProceeds:{
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            competition:{
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            amount: {
                type: Number,
                required: false,
                default: '',
                trim: true,
                validate: () => { }
            },
            percentOffered: {
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
        }
    ],
    viewData: [
        {
            Company:{
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            Symbol:{
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            Price: {
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            Shares: {
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            Amount: {
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            Float:{
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            Percent:{
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            Market:{
                type: String,
                required:false,
                default:'default-value',
                trim: true,
                lowercase:true,
                uppercase:false,
                unique:false,
                validate:() => { }
            },
            Expected: {
                type:Date,
                required: true,
                trim: true,
                validate: () => { }
            },
        }
    ]
});

export const ipo = mongoose.model('IPOs', schema);