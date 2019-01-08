import {shallow} from "enzyme";
import {ReactElement} from "react";
import {Store} from "redux";

function shallowWithStore<P>(component: ReactElement<P>, store: Store) {
    const context = {store};
    return shallow(component, {context});
}

export default shallowWithStore;