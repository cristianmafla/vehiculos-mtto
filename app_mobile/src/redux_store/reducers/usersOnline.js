import { USERS_ONLINE } from '../constants';
export default (state = [], { type, payload }) => {
    switch (type) {
        case USERS_ONLINE:
            return payload;
        default:
            return state;
    }
};