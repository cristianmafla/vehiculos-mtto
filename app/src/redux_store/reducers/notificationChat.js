import { NOTIFICATION_CHAT } from '../constants';

export default (state = [], {type, payload}) => {
    switch (type) {
        case NOTIFICATION_CHAT:
            return payload;
        default:
            return state;
    }
};