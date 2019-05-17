import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });
/*
        if(token !== "null"){
            try{
                const currentUserApi = await jwt.verify(token, process.env.SECRET);
                req.currentUserApi = currentUserApi;
                console.log('CURRENT_USER',currentUserApi);
                return { currentUserApi };
            }catch(err){
                console.log(`*** WARNING: NOT TOKEN ACCESS API ***`);
            }
        };
*/ 
const context = async ({req, connection}) => {
    if(connection){
        return connection.context;
    }else{
        const token = req.headers.authorization || "";
        if(token !== "null" && token !== null && token !== ""){
            const currentUserApi = await jwt.verify(token, process.env.SECRET);
            req.currentUserApi = currentUserApi;
            console.log('*** ACCESS_TOKEN_USER_API: ',currentUserApi);
            return { currentUserApi };
        }else{
            console.log(`*** WARNING: NOT TOKEN ACCESS API ***`);
        };
    };
};

const uploads = {
    maxFileSize: 10000000,
    maxFiles: 20
};

const subscriptions = {
    onConnect: (connectionParams, webSocket, context) => {
        if (connectionParams.authorization) {
            return { usuarioActual: true }
        }
        throw new Error('Missing auth token!');
    },
    onDisconnect: (webSocket, context) => {}
};

export { context, uploads, subscriptions };