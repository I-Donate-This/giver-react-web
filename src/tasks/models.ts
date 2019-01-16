import {CancelTaskAction, StartTaskAction, TaskInfo} from "./actionCreators";

export interface TasksState {
    currentTask?: TaskInfo;
}

export interface TaskProps {
    activatedRoute: string;
    onStartTask: (taskInfo: TaskInfo) => StartTaskAction;
    onCancelTask: () => CancelTaskAction;
}
