import { TOKEN_AUTH } from '../constants';
export default (state = [], {type, payload}) => {
    switch (type) {
        case TOKEN_AUTH:
            return payload;
        default:
            return state;
    }
};