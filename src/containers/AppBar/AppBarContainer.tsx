import GAppBar from "../../components/AppBar/AppBarComponent";
import * as React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {makeSelectLocationPathname} from "../App/selectors";

interface GAppBarContainerProps {
    routerPath: string;
}

function mapLocationPathToTitle(routerPath: string) {
    return routerPath === '/login' ? 'Login' : 'The Giver';
}

export const AppBarContainer = (props: GAppBarContainerProps) => <GAppBar
    title={mapLocationPathToTitle(props.routerPath)}/>;

export default connect(createStructuredSelector({
    routerPath: makeSelectLocationPathname()
}))(AppBarContainer);

