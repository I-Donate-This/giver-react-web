import AppBarComponent from "../../components/AppBar/AppBarComponent";
import * as React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {makeSelectCurrentPage, makeSelectCurrentTask} from "../App/selectors";
import {PageInfo} from "../../pages/actionCreators";
import {push} from "connected-react-router";
import {TaskInfo} from "../../tasks/actionCreators";

interface AppBarContainerProps {
    currentPage: PageInfo;
    currentTask?: TaskInfo;
    onLoginClick: () => void;
}

export const AppBarContainer = (props: AppBarContainerProps) =>
    <AppBarComponent
        title={(props.currentTask && props.currentTask.navTitle) || (props.currentPage && props.currentPage.navTitle)}
        taskStarted={!!props.currentTask}
        onLoginClick={props.onLoginClick}
    />;

export default connect(createStructuredSelector({
    currentPage: makeSelectCurrentPage(),
    currentTask: makeSelectCurrentTask(),
}), {onLoginClick: () => push('/login')})(AppBarContainer);
