const {init} = require('genuine-mock-server');

const mocks = [
    {
        request: {
            method: 'post',
            path: '/api/v1/users/login',
            body: {
                username: 'goodguy',
                password: 'password'
            }
        },
        response: {
            statusCode: 200,
            data: {
                'result': 'success',
            }
        },
    },
    {
        request: {
            method: 'post',
            path: '/api/v1/users/login',
            body: {
                username: 'badguy',
                password: 'password'
            }
        },
        response: {
            statusCode: 403,
            data: {
                'result': 'failed',
            }
        },
    }
];

init({
    port: 3001,
    mocks: mocks,
});
