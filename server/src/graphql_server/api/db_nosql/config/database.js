import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/equity-screener', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

export default mongoose;
