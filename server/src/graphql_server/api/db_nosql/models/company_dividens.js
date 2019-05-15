import mongoose from '../config/database';

const schema = new mongoose.Schema({
    symbol: {
        type: String,
<<<<<<< HEAD
        required: true,
        trim: true,
=======
        trim: true,
        defaul:false,
>>>>>>> dcd424f054b2d6f45ca9557284b5ab6ad9190c04
        lowercase: true,
        validate: () => { }
    },
    exDate: {
        type: String,
<<<<<<< HEAD
        default: 'default-value',
=======
        default: false,
>>>>>>> dcd424f054b2d6f45ca9557284b5ab6ad9190c04
        trim: true,
        validate: () => { }
    },
    paymentDate: {
        type: String,
<<<<<<< HEAD
        default: 'default-value',
=======
        default: false,
>>>>>>> dcd424f054b2d6f45ca9557284b5ab6ad9190c04
        trim: true,
        validate: () => { }
    },
    recordDate: {
        type: String,
<<<<<<< HEAD
        default: 'default-value',
=======
        default: false,
>>>>>>> dcd424f054b2d6f45ca9557284b5ab6ad9190c04
        trim: true,
        validate: () => { }
    },
    declaredDate: {
        type: String,
<<<<<<< HEAD
        default: 'default-value',
=======
        default: false,
>>>>>>> dcd424f054b2d6f45ca9557284b5ab6ad9190c04
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
<<<<<<< HEAD
        default:'default-value',
=======
        default:false,
>>>>>>> dcd424f054b2d6f45ca9557284b5ab6ad9190c04
        trim: true,
        lowercase:true,
        validate:() => { }
    },
    qualified: {
        type: String,
<<<<<<< HEAD
        default: 'default-value',
=======
        default: false,
>>>>>>> dcd424f054b2d6f45ca9557284b5ab6ad9190c04
        trim: true,
        lowercase: true,
        validate: () => { }
    }
});

export const companyDividens = mongoose.model('companyDividens', schema);