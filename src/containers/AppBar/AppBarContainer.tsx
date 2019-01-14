import GAppBar from "../../components/AppBar/AppBarComponent";
import * as React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {makeSelectCurrentPage} from "../App/selectors";
import {PageInfo} from "../../pages/actionCreators";

interface GAppBarContainerProps {
    currentPage: PageInfo;
}

export const AppBarContainer = (props: GAppBarContainerProps) =>
    <GAppBar title={props.currentPage && props.currentPage.navTitle}/>;

export default connect(createStructuredSelector({
    currentPage: makeSelectCurrentPage()
}))(AppBarContainer);
