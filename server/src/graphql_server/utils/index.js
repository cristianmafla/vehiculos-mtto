import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });

const context = async ({req, connection}) => {
    if(connection){
        return connection.context;
    }else{
        const token = req.headers.authorization || "";
        if(token !== "null"){
            try{
                const usuarioActual = await jwt.verify(token, process.env.SECRET);
                req.usuarioActual = usuarioActual;
                return { usuarioActual };
            }catch(err){
                console.log('error_token', err);
            }
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