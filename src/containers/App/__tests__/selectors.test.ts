import {makeSelectCurrentPage, makeSelectCurrentTask} from "../selectors";
import {ApplicationState} from "../../../configureStore";

describe('App: selectors', () => {
    it('selects current page from state', () => {
        const state: ApplicationState = {
            pages: {
                currentPage: {navTitle: 'Home'}
            }
        };

        const selector = makeSelectCurrentPage();
        const currentPageInfo = selector(state);
        expect(currentPageInfo && currentPageInfo.navTitle).toEqual('Home');
    });

    it('selects current task from state', () => {
        const state: ApplicationState = {
            tasks: {
                currentTask: {navTitle: 'Login'}
            }
        };

        const selector = makeSelectCurrentTask();
        const currentTaskInfo = selector(state);
        expect(currentTaskInfo && currentTaskInfo.navTitle).toEqual('Login');
    });
});