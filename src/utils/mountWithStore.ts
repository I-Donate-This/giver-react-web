import {mount} from "enzyme";
import {ReactElement} from "react";
import {Store} from "redux";

function mountWithStore<P>(component: ReactElement<P>, store: Store) {
    const context = {store};
    return mount(component, {context});
}

export default mountWithStore;