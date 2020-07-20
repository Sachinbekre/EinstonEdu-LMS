
import { HeaderInterface, headerReducer, INITIAL_STATE_HEADER } from './reducers/headerReducer';
import { LeftMenuBarInterface, sideMenuBarReducer, INITIAL_STATE_LEFTMENUBAR } from './reducers/leftMenuBarReducer';
import { GlobalSettingsInterface, globalSettingsReducer, INITIAL_STATE_GLOBALSETTING } from './reducers/globalSettingsReducer';

import { combineReducers } from 'redux';

export interface IAppState {
    header?: HeaderInterface;
    leftMenuBar?: LeftMenuBarInterface;
    globalSetting?: GlobalSettingsInterface;
}

export const INITIAL_STATE: IAppState = {
    header: INITIAL_STATE_HEADER,
    leftMenuBar: INITIAL_STATE_LEFTMENUBAR,
    globalSetting: INITIAL_STATE_GLOBALSETTING
};
export const rootReducer = combineReducers({
    header: headerReducer,
    leftMenuBar : sideMenuBarReducer,
    globalSetting: globalSettingsReducer
});
