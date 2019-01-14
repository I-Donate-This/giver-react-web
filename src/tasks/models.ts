import {CancelTaskAction, StartTaskAction, TaskInfo} from "./actionCreators";

export interface TasksState {
    currentTask?: TaskInfo;
}

export interface TaskProps {
    onStartTask: (taskInfo: TaskInfo) => StartTaskAction;
    onCancelTask: () => CancelTaskAction;
}
