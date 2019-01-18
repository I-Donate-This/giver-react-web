import {NAVIGATOR_START_PAGE_ACTION, ActivePageAction} from "../actionCreators";
import {navigatorReducer, NavigatorState} from "../reducers";

describe('Navigator Reducers', () => {
    test('updates active page', () => {
        const startPageAction: ActivePageAction = {type: NAVIGATOR_START_PAGE_ACTION, path: '/work'};

        const result: NavigatorState = navigatorReducer({}, startPageAction);

        expect(result.activePagePath).toEqual('/work');
    });
});