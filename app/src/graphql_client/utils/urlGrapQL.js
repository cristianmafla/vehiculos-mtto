const MOD = 'DEV';
const BASE_URL = `localhost:5000`;
const BASE_URL_HEROKU = `api-ap-graphql.herokuapp.com`;

let
    BASE_URL_GRAPHQL = '',
    BASE_WS_GRAPHQL = '';

if(MOD === 'DEV'){
    BASE_URL_GRAPHQL = `http://${BASE_URL}`;
    BASE_WS_GRAPHQL = `ws://${BASE_URL}`;
}
if (MOD === 'PROD') {
    BASE_URL_GRAPHQL = `https://${BASE_URL_HEROKU}`;
    BASE_WS_GRAPHQL = `wss://${BASE_URL_HEROKU}`;
}


export { BASE_URL_GRAPHQL, BASE_WS_GRAPHQL}
