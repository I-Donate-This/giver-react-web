import {Action, Dispatch} from "redux";
import axios from 'axios';

const LOGIN_UI_USER_SUBMIT = '[LOGIN][UI] USER_SUBMIT';
const LOGIN_ASYNC_REQUEST_SUBMIT = '[LOGIN][ASYNC] REQUEST_SUBMIT';
export const LOGIN_ASYNC_RESULT_SUBMIT = '[LOGIN][ASYNC] RESULT_SUBMIT';

export enum LoginResponse {
    SUCCESS = 200,
    UNAUTHORIZED = 403,
    FAILED = 500,
}

export interface Credentials {
    username: string;
    password: string;
}

interface LoginUIUserSubmitAction extends Action {
    payload: Credentials;
}

export function login(data: Credentials): LoginUIUserSubmitAction {
    return {
        type: LOGIN_UI_USER_SUBMIT,
        payload: {
            username: data.username,
            password: data.password
        }
    };
}

interface LoginAsyncRequestSubmitAction extends Action {
    payload: Credentials;
}

function requestSubmit(data: Credentials): LoginAsyncRequestSubmitAction {
    return {
        type: LOGIN_ASYNC_REQUEST_SUBMIT,
        payload: {
            username: data.username,
            password: data.password
        }
    };
}

export interface LoginAsyncResultSubmitAction extends Action {
    payload: {
        result: number
    };
}

export function responseSubmit(result: LoginResponse): LoginAsyncResultSubmitAction {
    return {
        type: LOGIN_ASYNC_RESULT_SUBMIT,
        payload: {
            result: result
        }
    };
}


function sendHttpLoginRequest(credentials: Credentials) {
    return axios.post(`http://localhost:3001/api/v1/users/login`, credentials);
}

export function submitLogin(credentials: Credentials) {
    return (dispatch: Dispatch) => {
        dispatch(requestSubmit(credentials));
        return sendHttpLoginRequest(credentials)
            .then(response => response.data)
            .then(json => dispatch(responseSubmit(LoginResponse.SUCCESS)))
            .catch(error => {
                if (error.response && error.response.status === 403) {
                    dispatch(responseSubmit(LoginResponse.UNAUTHORIZED));
                } else {
                    dispatch(responseSubmit(LoginResponse.FAILED));
                }
            });
    }
}

