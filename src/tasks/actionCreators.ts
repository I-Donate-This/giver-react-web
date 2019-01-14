import {Action} from "redux";

export const TASKS_START_TASK = '[TASKS] Start Task';
export const TASKS_CANCEL_TASK = '[TASKS] Cancel Task';

export interface StartTaskAction extends Action {
    payload: TaskInfo;
}

export interface CancelTaskAction extends Action {}

export interface TaskInfo {
    navTitle: string
}

export const startTask = (taskInfo: TaskInfo): StartTaskAction => ({type: TASKS_START_TASK, payload: taskInfo});
export const cancelTask = (): CancelTaskAction => ({type: TASKS_CANCEL_TASK});
