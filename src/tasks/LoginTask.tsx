import * as React from 'react';
import {PureComponent} from "react";
import {connect} from "react-redux";
import {TaskProps} from "./models";
import {cancelTask, startTask} from "./actionCreators";
import {ApplicationState} from "../configureStore";


class LoginTask extends PureComponent {
    constructor(public props: TaskProps) {
        super(props);
    }

    componentWillMount(): void {
        this.props.onStartTask({route: this.props.activatedRoute, navTitle: 'Login'})
    }

    componentWillUnmount(): void {
        this.props.onCancelTask();
    }

    render() {
        return (<div>Login Task</div>);
    }
}

export default connect(
    (state: ApplicationState) => ({
        activatedRoute: state.router.location.pathname
    }),
    {
        onStartTask: startTask,
        onCancelTask: cancelTask,
    })(LoginTask);
