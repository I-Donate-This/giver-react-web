import {makeSelectCurrentPage} from "../selectors";
import {ApplicationState} from "../../../configureStore";

describe('App: selectors', () => {
    it('selects current page from state', () => {
        const state: ApplicationState = {
            pages: {
                currentPage: {navTitle: 'Login'}
            }
        };

        const selector = makeSelectCurrentPage();
        const currentPageInfo = selector(state);
        expect(currentPageInfo && currentPageInfo.navTitle).toEqual('Login');
    });

});