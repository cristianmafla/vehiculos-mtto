import { NOTIFICATION_CHAT } from '../constants';

const ActionNotificationChat = state => {
    return {
        type: NOTIFICATION_CHAT,
        payload:state
    };
};

export default ActionNotificationChat;