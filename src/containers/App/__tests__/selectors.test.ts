import {makeSelectLocationPathname} from "../selectors";

describe('App: selectors', () => {
    it('selects location from router', () => {
        const state = {
            router: {
                location: {
                    pathname: '/login',
                    search: '',
                    hash: ''
                },
                action: 'POP'
            }
        };
        const locationPathnameStateSelector = makeSelectLocationPathname();

        const location = locationPathnameStateSelector(state);

        expect(location).toEqual('/login');
    });

});