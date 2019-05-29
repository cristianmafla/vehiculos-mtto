import { USERS_ONLINE } from '../constants';

const ActionUsersOnline = objchat => {
    return {
        type: USERS_ONLINE,
        payload: objchat
    };
};

export default ActionUsersOnline;