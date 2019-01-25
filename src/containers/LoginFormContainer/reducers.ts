import {LOGIN_ASYNC_RESULT_SUBMIT, LoginAsyncResultSubmitAction, LoginResponse} from './actionCreators';

export interface LoginState {
    authenticated: boolean;
}

export function loginReducer(state: LoginState, action: LoginAsyncResultSubmitAction): LoginState {
    if (action.type !== LOGIN_ASYNC_RESULT_SUBMIT) {
        return {...state};
    }

    switch (action.payload.result) {
        case LoginResponse.SUCCESS:
            return {authenticated: true};
        case LoginResponse.UNAUTHORIZED:
            return {authenticated: false};
        default:
            return {...state};
    }
}