import * as React from 'react';
import App from '../containers/App/App';
import {mount} from "enzyme";
import {MemoryRouter} from "react-router";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import {createMockStore} from "redux-test-utils";
import {Provider} from "react-redux";

it('Routes to Home Page', () => {
    const store = createMockStore({
        router: {
            location: {
                pathname: '/'
            }
        }
    });

    const wrapper = mount(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/']}>
                <App/>
            </MemoryRouter>
        </Provider>
    );

    expect(wrapper.find(HomePage)).toHaveLength(1);
});


it('Routes to Login Page', () => {
    const store = createMockStore({
        router: {
            location: {
                pathname: '/login'
            }
        }
    });

    const wrapper = mount(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/login']}>
                <App/>
            </MemoryRouter>
        </Provider>
    );

    expect(wrapper.find(LoginPage)).toHaveLength(1);
});