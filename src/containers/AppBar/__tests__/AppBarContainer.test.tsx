import {createMockStore} from 'redux-test-utils';
import * as React from "react";
import {AppBarContainer} from "../AppBarContainer";
import shallowWithStore from "../../../utils/shallowWithStore";

describe('AppBarContainer', () => {
    test('renders Navigation title from current page info', () => {
        const store = createMockStore();

        const wrapper = shallowWithStore(
            <AppBarContainer
                currentPage={{
                    route: '/myroute',
                    navTitle: 'Navigation Title'
                }}
                currentTask={undefined}
                activePagePath={'/myroute'}
                onLoginClick={()=>{}}
                onCancelClick={()=>{}}
            />, store);

        expect(wrapper.prop('title')).toEqual('Navigation Title');
    });
});