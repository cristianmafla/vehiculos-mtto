import mongoose from '../config/database';

const schema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate: () => { }
    },
    exDate: {
        type: String,
        default: 'default-value',
        trim: true,
        validate: () => { }
    },
    paymentDate: {
        type: String,
        default: 'default-value',
        trim: true,
        validate: () => { }
    },
    recordDate: {
        type: String,
        default: 'default-value',
        trim: true,
        validate: () => { }
    },
    declaredDate: {
        type: String,
        default: 'default-value',
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
        default:'default-value',
        trim: true,
        lowercase:true,
        validate:() => { }
    },
    qualified: {
        type: String,
        default: 'default-value',
        trim: true,
        lowercase: true,
        validate: () => { }
    }
});

export const companyDividens = mongoose.model('companyDividens', schema);