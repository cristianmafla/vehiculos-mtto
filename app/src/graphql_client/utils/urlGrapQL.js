const BASE_URL = `localhost:5000`;
const BASE_URL_HTTPS = `api-ap-graphql.herokuapp.com`;

let
    MOD = 'DEV',
    BASE_URL_GRAPHQL = '',
    BASE_WS_GRAPHQL = '';

if(MOD === 'DEV'){
    BASE_URL_GRAPHQL = `http://${BASE_URL}`;
    BASE_WS_GRAPHQL = `ws://${BASE_URL}`;
}
if (MOD === 'PROD') {
    BASE_URL_GRAPHQL = `http://${BASE_URL_HTTPS}`;
    BASE_WS_GRAPHQL = `ws://${BASE_URL_HTTPS}`;
}


export { BASE_URL_GRAPHQL, BASE_WS_GRAPHQL}
