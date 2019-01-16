import {cancelTask, startTask, TASKS_CANCEL_TASK, TASKS_START_TASK} from "../actionCreators";

describe('actionCreators', () => {
   test('should dispatch START_TASK action', () => {
       expect(startTask({
           route: '/login',
           navTitle: 'Login'
       })).toEqual({type: TASKS_START_TASK, payload: {route: '/login', navTitle: 'Login'}});
   });

   test('should dispatch CANCEL_TASK action', () => {
       expect(cancelTask()).toEqual({type: TASKS_CANCEL_TASK});
   });
});