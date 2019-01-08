import {createMockStore} from 'redux-test-utils';
import * as React from "react";
import {AppBarContainer} from "../AppBarContainer";
import shallowWithStore from "../../../utils/shallowWithStore";

describe('AppBarContainer', () => {
    it('renders', () => {
        const store = createMockStore();

        const wrapper = shallowWithStore(<AppBarContainer routerPath={'/login'}/>, store);

        expect(wrapper.prop('title')).toEqual('Login');
    });
});