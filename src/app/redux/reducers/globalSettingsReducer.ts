
import { CHANGESETTING, RESETSETTING } from '../actions/actions';

export interface GlobalSettingsInterface {
    showPendingTasks?: boolean;
    showNotifications?: boolean;
    showServerStatus?: boolean;
    showMessages?: boolean;
    showHeaderButtons?: boolean;
    enablePopUpNotification?: boolean;
    showLeftSideBar?: boolean;
    showRightSideBar?: boolean;
    showBreadCrumbBar?: boolean;
}
export const INITIAL_STATE_GLOBALSETTING: GlobalSettingsInterface = {
    showPendingTasks: false,
    showNotifications: true,
    showServerStatus: true,
    showMessages: true,
    showHeaderButtons: true,
    enablePopUpNotification : true,
    showLeftSideBar : false,
    showRightSideBar : true,
    showBreadCrumbBar : false
};

export function globalSettingsReducer(state: GlobalSettingsInterface= INITIAL_STATE_GLOBALSETTING, action): GlobalSettingsInterface {
    switch (action.type) {
        case CHANGESETTING:
            return Object.assign({}, state, action.data);
        case RESETSETTING:
            return Object.assign({}, state, INITIAL_STATE_GLOBALSETTING);
    }
    return state;
}
