import * as React from "react";
import {LoginForm} from "../../components/LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "./actionCreators";
import {ApplicationState} from "../../configureStore";

export interface LoginFormModel {
    username?: string;
    password?: string;
}

export interface LoginFormContainerProps {
    onLoginSubmit: (formData: LoginFormModel) => void;
}

const LoginFormContainerBase = (props: LoginFormContainerProps) =>
    <LoginForm onLoginSubmit={props.onLoginSubmit}/>;

export const LoginFormContainer = connect(
    (state: ApplicationState) => state,
    {onLoginSubmit: login})
(LoginFormContainerBase);
