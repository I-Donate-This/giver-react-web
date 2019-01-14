import {LoadPageAction, PAGES_LOAD_PAGE} from "./actionCreators";
import {PagesState} from "./models";

const initialState = {currentPage: undefined};

export const pagesReducer = (state: PagesState = initialState, action: LoadPageAction): PagesState  => {
    if (action.type === PAGES_LOAD_PAGE) {
        return {...state, ...{currentPage: {...action.payload}}};
    } else {
        return state;
    }
};
