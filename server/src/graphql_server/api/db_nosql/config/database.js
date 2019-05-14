import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/equity-screener', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, '*** ERROR CONNECTION DATABASE MONGODB *** ===> '));
db.once('open', () => console.log('*** OPEN CONNECTION DATABASE MONGODB ***'));

export default mongoose;
