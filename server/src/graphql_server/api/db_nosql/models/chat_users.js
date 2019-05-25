import mongoose from '../config/database';

const schema = new mongoose.Schema({
    message : {
        type: String,
        default:false,
        trim: true,
        lowercase:true,
        validate:() => { }
    },
    date:{
        type:Date,
        trim: true,
        validate: () => { }
    },
    user:{
        type: {},
        default: {},
        trim: true,
        validate: () => { }
    }
});

export const chatUsers = mongoose.model('chatUser', schema);