import * as React from 'react';
import App from '../App';
import {mount} from "enzyme";
import {MemoryRouter} from "react-router";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

it('Routes to Home Page', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
            <App/>
        </MemoryRouter>
    );

    expect(wrapper.find(HomePage)).toHaveLength(1);
});


it('Routes to Login Page', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/login']}>
            <App/>
        </MemoryRouter>
    );

    expect(wrapper.find(LoginPage)).toHaveLength(1);
});