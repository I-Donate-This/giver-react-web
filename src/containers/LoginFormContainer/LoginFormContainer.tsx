import * as React from "react";
import {LoginForm} from "../../components/LoginForm/LoginForm";
import {connect} from "react-redux";
import {Credentials, login, submitLogin} from "./actionCreators";
import {createStructuredSelector} from 'reselect';
import {makeSelectIsUserAuthenticated} from '../App/selectors';

export interface LoginFormModel {
    username?: string;
    password?: string;
}

export interface LoginFormContainerProps {
    dispatch: any; //TODO: WHAT TYPE SHOULD THIS BE???
    isAuthenticated: boolean;
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
        return <LoginForm isAuthenticated={this.props.isAuthenticated} onLoginSubmit={this.handleLoginSubmit}/>;
    }
}

export default connect(createStructuredSelector({
    isAuthenticated: makeSelectIsUserAuthenticated()
}))(LoginFormContainer);
