import mongoose from '../config/database';

const schema = new mongoose.Schema({
    symbol: {
        type: String,
        trim: true,
        defaul:false,
        lowercase: true,
        validate: () => { }
    },
    exDate: {
        type: String,
        default: false,
        trim: true,
        validate: () => { }
    },
    paymentDate: {
        type: String,
        default: false,
        trim: true,
        validate: () => { }
    },
    recordDate: {
        type: String,
        default: false,
        trim: true,
        validate: () => { }
    },
    declaredDate: {
        type: String,
        default: false,
        trim: true,
        validate: () => { }
    },
    amount: {
        type: Number,
        default: 0,
        validate: () => { }
    },
    type: {
        type: String,
        default:false,
        trim: true,
        lowercase:true,
        validate:() => { }
    },
    qualified: {
        type: String,
        default: false,
        trim: true,
        lowercase: true,
        validate: () => { }
    }
});

export const companyDividens = mongoose.model('companyDividens', schema);