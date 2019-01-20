import {Action} from "redux";

const EFFECT_LOGIN = '[EFFECT] LOGIN';

interface LoginData {
    username: string;
    password: string;
}

interface LoginAction extends Action {
    payload: { username: string, password: string };
}

export const login = (loginData: LoginData): LoginAction =>
    ({type: EFFECT_LOGIN, payload: {username: loginData.username, password: loginData.password}});
