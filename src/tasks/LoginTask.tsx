import * as React from 'react';
import {PureComponent} from "react";
import {connect} from "react-redux";
import {TaskProps} from "./models";
import {startTask} from "./actionCreators";


class LoginTask extends PureComponent {
    constructor(public props: TaskProps) {
        super(props);
    }

    componentDidMount(): void {
        this.props.onStartTask({navTitle: 'Login'})
    }

    render() {
        return (<div>Login Task</div>);
    }
}

export default connect((state) => ({}), {onStartTask: startTask})(LoginTask);
