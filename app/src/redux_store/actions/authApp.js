import { TOKEN_AUTH } from '../constants';

const authApp = token => {
    return {
        type: TOKEN_AUTH,
        payload:token
    };
};

export default authApp ;