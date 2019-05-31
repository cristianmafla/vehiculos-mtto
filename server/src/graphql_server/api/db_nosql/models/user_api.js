import mongoose from '../config/database';

const schema = new mongoose.Schema({
    name : {
        type: String,
        default:false,
        trim: true,
        lowercase:true,
        validate:() => { }
    },
    lastname: {
        type: String,
        default: false,
        trim: true,
        lowercase: true,
        validate: () => { }
    },
    email: {
        type: String,
        default: false,
        trim: true,
        validate: () => { }
    },
    password: {
        type: String,
        default: false,
        validate: () => { }
    },
    imageUrl: {
        type: String,
        default: false,
        validate: () => { }
    },
    roles:{
        type: [],
        required: true,
        default: ['false'],
        trim: true,
        validate: () => { }
    },
    online:{
        type: Boolean,
        default: false,
        validate: () => { }
    },
    mode:{
        type: String,
        default: 'local',
        validate: () => { }
    }
});

export const userApi = mongoose.model('userApi', schema);