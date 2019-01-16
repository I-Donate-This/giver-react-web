import {CancelTaskAction, LoadPageAction, PAGES_LOAD_PAGE} from "./actionCreators";
import {PagesState} from "./models";

const initialState = {currentPage: undefined};

type Action = LoadPageAction | CancelTaskAction;
export const pagesReducer = (state: PagesState = initialState, action: Action): PagesState  => {
    switch(action.type) {
        case PAGES_LOAD_PAGE:
            return {...state, ...{currentPage: {...(action as LoadPageAction).payload}}};
        default:
            return state;
    }
};
