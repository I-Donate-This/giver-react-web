import AppBarComponent from "../../components/AppBar/AppBarComponent";
import * as React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {makeSelectCurrentPage, makeSelectCurrentTask, makeSelectNavigatoractivePagePath} from "../App/selectors";
import {PageInfo} from "../../pages/actionCreators";
import {push} from "connected-react-router";
import {TaskInfo} from "../../tasks/actionCreators";

interface AppBarContainerProps {
    currentPage: PageInfo;
    currentTask?: TaskInfo;
    activePagePath: string;
    onLoginClick: () => void;
    onCancelClick: (p: string) => void;
}

export const AppBarContainer = (props: AppBarContainerProps) =>
    <AppBarComponent
        title={(props.currentTask && props.currentTask.navTitle) || (props.currentPage && props.currentPage.navTitle)}
        activePagePath={props.activePagePath}
        taskStarted={!!props.currentTask}
        onLoginClick={props.onLoginClick}
        onCancelClick={props.onCancelClick}
    />;

export default connect(createStructuredSelector({
    currentPage: makeSelectCurrentPage(),
    currentTask: makeSelectCurrentTask(),
    activePagePath: makeSelectNavigatoractivePagePath(),
}), {
    onLoginClick: () => push('/login'),
    onCancelClick: (previousPagePath: string) => push(previousPagePath),
})(AppBarContainer);
