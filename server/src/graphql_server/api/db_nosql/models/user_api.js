import mongoose from '../config/database';

const schema = new mongoose.Schema({
    nombres : {
        type: String,
        default:false,
        trim: true,
        lowercase:true,
        validate:() => { }
    },
    apellidos: {
        type: String,
        default: false,
        trim: true,
        lowercase: true,
        validate: () => { }
    },
    correo: {
        type: String,
        default: false,
        trim: true,
        lowercase: true,
        validate: () => { }
    },
    contrasena: {
        type: String,
        default: false,
        trim: true,
        lowercase: true,
        validate: () => { }
    },
    imageUrl: {
        type: String,
        default: false,
        trim: true,
        lowercase: true,
        validate: () => { }
    },
    roles:{
        type: [],
        required: true,
        default: ['false'],
        trim: true,
        validate: () => { }
    }
});

export const userApi = mongoose.model('userApi', schema);