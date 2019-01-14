import {CancelTaskAction, StartTaskAction, TASKS_CANCEL_TASK, TASKS_START_TASK} from "./actionCreators";
import {TasksState} from "./models";

const initialState = {currentTask: undefined};

type Action = StartTaskAction | CancelTaskAction;

export const tasksReducer = (state: TasksState = initialState, action: Action): TasksState  => {
    switch (action.type) {
        case TASKS_START_TASK:
            return {...state, ...{currentTask: {...(action as StartTaskAction).payload}}};
        case TASKS_CANCEL_TASK:
            return {...state, ...{currentTask: undefined}};
        default:
            return state;
    }
};
