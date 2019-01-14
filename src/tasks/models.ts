import {StartTaskAction, TaskInfo} from "./actionCreators";

export interface TasksState {
    currentTask?: TaskInfo;
}

export interface TaskProps {
    onStartTask: (pageInfo: TaskInfo) => StartTaskAction;
}
