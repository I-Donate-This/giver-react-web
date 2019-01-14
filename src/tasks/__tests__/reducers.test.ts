import {CancelTaskAction, StartTaskAction, TASKS_CANCEL_TASK, TASKS_START_TASK} from "../actionCreators";
import {tasksReducer} from "../reducers";

describe('[tasks] reducers', () => {
    it('leaves state unchanged if not a task action', () => {
        const startTaskAction = {type: 'UNKNOWN_TYPE', payload: {navTitle: 'Unknown Page Title'}} as StartTaskAction;

        const resultState = tasksReducer({}, startTaskAction);

        expect(resultState).toEqual({});
    });

    it('sets currentTask info', () => {
        const startTaskAction: StartTaskAction = {
            type: TASKS_START_TASK,
            payload: {navTitle: 'Super Awesome Nav Title'}
        };

        const resultState = tasksReducer({}, startTaskAction);

        expect(resultState).toEqual({currentTask: {navTitle: 'Super Awesome Nav Title'}});
    });

    it('unsets currentTask when cancelled', () => {
        const cancelTaskAction: CancelTaskAction = {
            type: TASKS_CANCEL_TASK
        };

        const resultState = tasksReducer({}, cancelTaskAction);

        expect(resultState).toEqual({currentTask: undefined});
    });
});
