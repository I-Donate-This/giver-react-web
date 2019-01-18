import {NAVIGATOR_START_PAGE_ACTION, activePage} from "../actionCreators";

describe('Navigator Action Creators', () => {
    test('creates active page action', () => {
        expect(activePage('/home')).toEqual({type: NAVIGATOR_START_PAGE_ACTION, path: '/home'});
    });
});