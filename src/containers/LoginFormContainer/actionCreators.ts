import {Action, Dispatch} from "redux";
import axios from 'axios';

const LOGIN_UI_USER_SUBMIT = '[LOGIN][UI] USER_SUBMIT';
const LOGIN_ASYNC_REQUEST_SUBMIT = '[LOGIN][ASYNC] REQUEST_SUBMIT';
const LOGIN_ASYNC_RESULT_SUBMIT = '[LOGIN][ASYNC] RESULT_SUBMIT';

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

interface LoginAsyncResultSubmitAction extends Action {
    payload: {
        result: string
    };
}

function responseSubmit(result: string): LoginAsyncResultSubmitAction {
    return {
        type: LOGIN_ASYNC_RESULT_SUBMIT,
        payload: {
            result: result
        }
    };
}


function sendHttpLoginRequest(credentials: Credentials) {
    return axios.post(`http://localhost:3001/api/v1/users/login`, credentials);
    // return Promise.resolve({
    //     data: {
    //         credentials: credentials,
    //         result: {success: true}
    //     }
    // });
}

export function submitLogin(credentials: Credentials) {
    return (dispatch: Dispatch) => {
        dispatch(requestSubmit(credentials));
        return sendHttpLoginRequest(credentials)
            .then(response => response.data)
            .then(json => dispatch(responseSubmit(json.result)))
            .catch(error => {
                if (error.response && error.response.status === 403) {
                    dispatch(responseSubmit('Unauthorized'));
                } else {
                    dispatch(responseSubmit('Failed'));
                }
            });
    }
}

