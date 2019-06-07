import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });

//mongodb+srv://cristianmafla:<password>@apiappgraphql-hwc2y.mongodb.net/test?retryWrites=true&w=majority
//mongodb://127.0.0.1:27017/ApiAppGraphql
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, '*** ERROR CONNECTION DATABASE MONGODB *** ===> '));
db.once('open', () => console.log('*** OPEN CONNECTION DATABASE MONGODB ***'));

export default mongoose;
