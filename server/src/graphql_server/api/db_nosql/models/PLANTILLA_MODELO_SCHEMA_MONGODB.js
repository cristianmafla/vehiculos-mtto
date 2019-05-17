import mongoose from '../config/database';

const schema = new mongoose.Schema({
    string : {
        type: String,
        required:true,
        default:'default-value',
        trim: true,
        lowercase:true,
        uppercase:false,
        unique:false,
        validate:() => { }
    },
    number: {
        type: Number,
        required: true,
        default: 'default-value',
        trim: true,
        validate: () => { }
    },
    date:{
        type:Date,
        required: true,
        trim: true,
        validate: () => { }
    },
    boolean:{
        type:Boolean,
        required:true,
        default:true,
        trim:true,
        validate:() => { }
    },
    arrayStringData:{
        type: [String],
        required: true,
        default: ['default-value1','default-value2'],
        trim: true,
        validate: () => { }
    }
});

export const plantilla_schema = mongoose.model('plantilla_schema', schema);