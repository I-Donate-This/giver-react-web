import {mount} from "enzyme";
import GAppBar from "../AppBarComponent";
import * as React from "react";

describe('GAppBar', () => {
    it('renders default title', () => {
        const wrapper = mount(<GAppBar/>);

        expect(wrapper.text()).toContain("The Giver");
    });

    it('renders title from props', () => {
        const wrapper = mount(<GAppBar title="News Feed"/>);

        expect(wrapper.text()).toContain("News Feed");
    });
});
