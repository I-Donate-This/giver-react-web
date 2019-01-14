import {startTask, TASKS_START_TASK} from "../actionCreators";

describe('actionCreators', () => {
   test('should dispatch START_TASK action', () => {
       expect(startTask({navTitle: 'Login'})).toEqual({type: TASKS_START_TASK, payload: {navTitle: 'Login'}});
   })
});