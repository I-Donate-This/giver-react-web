import * as React from 'react';
import {PureComponent} from "react";
import {connect} from "react-redux";
import {TaskProps} from "./models";
import {cancelTask, startTask} from "./actionCreators";
import {LoginFormContainer, LoginFormModel} from "../containers/LoginFormContainer/LoginFormContainer";
import {ApplicationState} from "../configureStore";

interface LoginTaskPageProps extends TaskProps {
    onLoginSubmit: (formData: LoginFormModel) => void;
}

class LoginTaskPage extends PureComponent {
    constructor(public props: LoginTaskPageProps) {
        super(props);
    }

    componentWillMount(): void {
        this.props.onStartTask({navTitle: 'Login'})
    }

    componentWillUnmount(): void {
        this.props.onCancelTask();
    }

    render() {
        return (
            <LoginFormContainer onLoginSubmit={this.props.onLoginSubmit}/>
        );
    }
}

export default connect(
    (state: ApplicationState) => ({
        activatedRoute: state.router.location.pathname
    }),
    {
        onStartTask: startTask,
        onCancelTask: cancelTask,
    })(LoginTaskPage);
