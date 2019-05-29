import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });

const context = async ({req, connection}) => {
  if(connection){
    return connection.context;
  }else{
    const token = req.headers.authorization || "";
    if (token !== "null") {
      try {
        const currentUserApi = await jwt.verify(token, process.env.SECRET);
        req.currentUserApi = currentUserApi;
        console.log('*** TOKEN ACCESS CLIENT: ', currentUserApi);
        return { currentUserApi };
      } catch (err) {
        console.log(`*** NOT TOKEN ACCESS CLIENT ***`);
      };
    };
  };
};

const uploads = {
  maxFileSize: 10000000,
  maxFiles: 20
};

const subscriptions = {
    onConnect: (connectionParams, webSocket, context) => {
        //console.log('connectionParams',connectionParams);
/*
        if (connectionParams.authorization) {
            return { currentUserApi: true }
        }
        throw new Error('Missing auth token!.');
*/
    },
    onDisconnect: (webSocket, context) => {}
};

export { context, uploads, subscriptions };