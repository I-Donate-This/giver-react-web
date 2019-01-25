import {
    makeSelectCurrentPage,
    makeSelectCurrentRoute,
    makeSelectCurrentTask, makeSelectIsUserAuthenticated,
    makeSelectNavigatoractivePagePath
} from "../selectors";
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
                    navTitle: 'Home'
                }
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

    it('selects navigator current page path from state', () => {
        const state: ApplicationState = {
            navigator: {
                activePagePath: '/secure/posts'
            }
        };

        const selector = makeSelectNavigatoractivePagePath();
        const activePagePath = selector(state);
        expect(activePagePath).toEqual('/secure/posts');
    });

    test('select authenticated state', () => {
        const applicationState: ApplicationState = {
            auth: {
                authenticated: true
            }
        };

        const result = makeSelectIsUserAuthenticated()(applicationState);

        expect(result).toEqual(true);
    })
});
