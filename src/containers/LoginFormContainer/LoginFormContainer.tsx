import * as React from "react";
import {LoginForm} from "../../components/LoginForm/LoginForm";
import {connect} from "react-redux";
import {Credentials, login, submitLogin} from "./actionCreators";
import {ApplicationState} from "../../configureStore";

export interface LoginFormModel {
    username?: string;
    password?: string;
}

export interface LoginFormContainerProps {
    dispatch: any; //TODO: WHAT TYPE SHOULD THIS BE???
}

class LoginFormContainer extends React.Component<LoginFormContainerProps> {
    constructor(props: LoginFormContainerProps) {
        super(props);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    handleLoginSubmit(data: Credentials) {
        this.props.dispatch(login(data));
        this.props.dispatch(submitLogin(data));
    }

    render(): React.ReactNode {
        return <LoginForm onLoginSubmit={this.handleLoginSubmit}/>;
    }
}

export default connect(
    (state: ApplicationState) => state
)(LoginFormContainer);
