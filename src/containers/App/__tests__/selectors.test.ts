import {makeSelectCurrentPage, makeSelectCurrentRoute, makeSelectCurrentTask} from "../selectors";
import {ApplicationState} from "../../../configureStore";

describe('App: selectors', () => {
    it('selects current route from state', () => {
        const state: ApplicationState = {
            router: {
                location: {
                    pathname: '/home',
                    search: '',
                    hash: '',
                    key: 'sbla84'
                },
                action: 'POP'
            }
        };

        const selector = makeSelectCurrentRoute();
        const currentRoute = selector(state);
        expect(currentRoute).toEqual('/home');
    });

    it('selects current page from state', () => {
        const state: ApplicationState = {
            pages: {
                currentPage: {
                    route: '/home',
                    navTitle: 'Home'
                }
            }
        };

        const selector = makeSelectCurrentPage();
        const currentPageInfo = selector(state);
        expect(currentPageInfo && currentPageInfo.route).toEqual('/home');
        expect(currentPageInfo && currentPageInfo.navTitle).toEqual('Home');
    });

    it('selects current task from state', () => {
        const state: ApplicationState = {
            tasks: {
                currentTask: {route: '/login', navTitle: 'Login'}
            }
        };

        const selector = makeSelectCurrentTask();
        const currentTaskInfo = selector(state);
        expect(currentTaskInfo && currentTaskInfo.navTitle).toEqual('Login');
        expect(currentTaskInfo && currentTaskInfo.route).toEqual('/login');
    });
});