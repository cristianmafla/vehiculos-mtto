import mongoose from '../config/database';

const schema = new mongoose.Schema({
    placa : {
        type: String,
        required:true,
        default:'',
        trim: true,
        uppercase: true,
        unique:true,
        validate:() => { }
    },
    modelo: {
        type: Number,
        required: true,
        default: '',
        trim: true,
        validate: () => { }
    },
    tipo: {
        type: String,
        required: true,
        default: '',
        trim: true,
        validate: () => { }
    },
    marca: {
        type: String,
        required: true,
        default: '',
        trim: true,
        uppercase: true,
        validate: () => { }
    },
    propietario: {
        type: String,
        required: true,
        default: '',
        trim: true,
        validate: () => { }
    },
    documento: {
        type: Number,
        required: true,
        default: '',
        trim: true,
        validate: () => { }
    },
    detalle: {
        type: String,
        required: true,
        default: '',
        trim: true,
        validate: () => { }
    },
    fecha:{
        type:Date,
        required: true,
        trim: true,
        validate: () => { }
    },
    imageUrl: {
        type: String,
        default: false,
        validate: () => { }
    },
});

export const carApi = mongoose.model('carApi', schema);