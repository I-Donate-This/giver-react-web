import {LoadPageAction, PAGES_LOAD_PAGE} from "../actionCreators";
import {pagesReducer} from "../reducers";

describe('[pages] reducers', () => {
    it('leaves state unchanged if not page action', () => {
        const nonPageAction = {type: 'UNKNOWN_TYPE', payload: {navTitle: 'Unknown Page Title'}} as LoadPageAction;

        const resultState = pagesReducer({}, nonPageAction);

        expect(resultState).toEqual({});
    });

    it('sets activePage info', () => {
        const loadPageAction: LoadPageAction = {
            type: PAGES_LOAD_PAGE,
            payload: {
                navTitle: 'Super Awesome Nav Title'
            }
        };

        const resultState = pagesReducer({}, loadPageAction);

        expect(resultState).toEqual({currentPage: {navTitle: 'Super Awesome Nav Title'}});
    });
});
