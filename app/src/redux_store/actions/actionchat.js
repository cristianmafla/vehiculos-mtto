import { CHAT_MSN } from '../constants';

const ActionChat = objchat => {
    return {
        type: CHAT_MSN,
        payload:objchat
    };
};

export default ActionChat ;