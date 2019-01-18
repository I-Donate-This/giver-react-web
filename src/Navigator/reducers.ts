import {NAVIGATOR_START_PAGE_ACTION, ActivePageAction} from "./actionCreators";

export interface NavigatorState {
    activePagePath?: string;
}

const initialState = {activePagePath: undefined};

export function navigatorReducer(state: NavigatorState = initialState, startPageAction: ActivePageAction) {
    if (startPageAction.type === NAVIGATOR_START_PAGE_ACTION) {
        return {...state, ...{activePagePath: startPageAction.path}};
    }

    return state;
}