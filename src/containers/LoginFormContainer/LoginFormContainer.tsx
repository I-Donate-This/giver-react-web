import * as React from "react";
import {LoginForm} from "../../components/LoginForm/LoginForm";

export interface LoginFormModel {
    username?: string;
    password?: string;
}

export interface LoginFormContainerProps {
    onLoginSubmit: (formData: LoginFormModel) => void;
}

export const LoginFormContainer = (props: LoginFormContainerProps) =>
    <LoginForm onLoginSubmit={props.onLoginSubmit}/>;
