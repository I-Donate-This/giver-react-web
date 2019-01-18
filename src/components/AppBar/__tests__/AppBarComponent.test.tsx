import {mount} from "enzyme";
import AppBarComponent from "../AppBarComponent";
import * as React from "react";

describe('AppBarComponent', () => {
    it('renders default title', () => {
        const wrapper = mount(<AppBarComponent taskStarted={false} activePagePath="/current"
                                               onLoginClick={() => {
                                               }} onCancelClick={() => {
        }}/>);

        //TODO should not have to specify h6... too brittle.
        expect(wrapper.find('h6#navTitle').text()).toEqual('');
    });

    it('renders title from props', () => {
        const wrapper = mount(<AppBarComponent taskStarted={false} activePagePath="/news" title="News Feed"
                                               onLoginClick={() => {
                                               }} onCancelClick={() => {
        }}/>);

        expect(wrapper.text()).toContain("News Feed");
    });

    it('renders Close Menu Icon when task started', () => {
        const wrapper = mount(<AppBarComponent taskStarted={true} activePagePath="/login" title="Login"
                                               onLoginClick={() => {
                                               }} onCancelClick={() => {
        }}/>);

        expect(wrapper.text()).toContain("Login");
    });
});
