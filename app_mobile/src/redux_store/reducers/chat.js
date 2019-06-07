import { CHAT_MSN } from '../constants';

export default (state = [], {type, payload}) => {
    switch (type) {
        case CHAT_MSN:
            return payload;
        default:
            return state;
    }
};