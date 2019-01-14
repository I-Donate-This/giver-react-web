import {createSelector} from 'reselect';
import {ApplicationState} from "../../configureStore";

const selectPages = (state: ApplicationState) => state.pages;
const selectTasks = (state: ApplicationState) => state.tasks;

export const makeSelectCurrentPage = () =>
    createSelector(selectPages, pagesState => pagesState ? pagesState.currentPage : undefined);

export const makeSelectCurrentTask = () =>
    createSelector(selectTasks, tasksState => tasksState ? tasksState.currentTask : undefined);