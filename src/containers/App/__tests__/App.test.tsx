import * as React from 'react';
import App from '../App';
import {mount} from "enzyme";
import {MemoryRouter} from "react-router";
import LoginPage from "../../../tasks/LoginTaskPage";
import HomePage from "../../../pages/HomePage";
import {createMockStore} from "redux-test-utils";
import {Provider} from "react-redux";

describe('App', () => {
    let store: any;

    beforeEach(() => {
        store = createMockStore({router: {location: {pathname: '/'}}});
    });

    test('Routes to Home Page', () => {
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']}>
                    <App/>
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find(HomePage)).toHaveLength(1);
    });


    test('Routes to Login Page', () => {
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/login']}>
                    <App/>
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find(LoginPage)).toHaveLength(1);
    });
});
