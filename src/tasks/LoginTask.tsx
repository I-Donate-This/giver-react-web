import * as React from 'react';
import {PureComponent} from "react";
import {connect} from "react-redux";
import {TaskProps} from "./models";
import {cancelTask, startTask} from "./actionCreators";


class LoginTask extends PureComponent {
    constructor(public props: TaskProps) {
        super(props);
    }

    componentDidMount(): void {
        this.props.onStartTask({navTitle: 'Login'})
    }

    componentWillUnmount(): void {
        this.props.onCancelTask();
    }

    render() {
        return (<div>Login Task</div>);
    }
}

export default connect(
    (state) => ({}),
    {
        onStartTask: startTask,
        onCancelTask: cancelTask,
    })(LoginTask);
