import {loginReducer} from '../reducers';
import {LoginAsyncResultSubmitAction, LoginResponse, responseSubmit} from '../actionCreators';

describe('LoginFormContainer Reducers', () => {
    test('Not a LoginAsyncResultSubmitAction should pass through', () => {
        const action = {type: 'some other action'};

        const result = loginReducer({authenticated: false}, action as LoginAsyncResultSubmitAction);

        expect(result).toEqual({authenticated: false});
    });

    test('Login success change to unauthenticated state', () => {
        const action = responseSubmit(LoginResponse.SUCCESS);

        const result = loginReducer({authenticated: false}, action);

        expect(result).toEqual({authenticated: true});
    });

    test('Unable to validate credential change to unauthenticated state', () => {
        const action = responseSubmit(LoginResponse.UNAUTHORIZED);

        const result = loginReducer({authenticated: true}, action);

        expect(result).toEqual({authenticated: false});
    });

    test('Login action failed change state remained the same', () => {
        let action = responseSubmit(LoginResponse.FAILED);
        let result = loginReducer({authenticated: true}, action);
        expect(result).toEqual({authenticated: true});

        action = responseSubmit(LoginResponse.FAILED);
        result = loginReducer({authenticated: false}, action);
        expect(result).toEqual({authenticated: false});
    });
});