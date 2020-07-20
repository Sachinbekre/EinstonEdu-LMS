import { HEADERCONTENTCHANGE, HEADERRESET } from '../actions/actions';

export interface HeaderInterface {
    pendingTaskCount: number;
    pendingTaskList: any;
    pendingTaskLink: String;
    notificationCount: number;
    notificationList: any;
    notificationLink: String;
    messageCount: number;
    messageList: any;
    messageLink: string;
}

export const INITIAL_STATE_HEADER: HeaderInterface = {
    pendingTaskCount: 0,
    pendingTaskList: [],
    pendingTaskLink: '#',
    notificationCount: 0,
    notificationList: [],
    notificationLink: '#',
    messageCount: 0,
    messageList: [],
    messageLink: '#'
};

export function headerReducer(state: HeaderInterface = INITIAL_STATE_HEADER, action): HeaderInterface {
    switch (action.type) {
        case HEADERCONTENTCHANGE:
            return Object.assign({}, state, action.data);
        case HEADERRESET :
            return Object.assign({}, INITIAL_STATE_HEADER);
    }
    return state;
}
