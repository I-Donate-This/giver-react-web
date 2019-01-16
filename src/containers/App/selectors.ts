import {createSelector} from 'reselect';
import {ApplicationState} from "../../configureStore";

const selectRouter = (state: ApplicationState) => state.router;
const selectPages = (state: ApplicationState) => state.pages;
const selectTasks = (state: ApplicationState) => state.tasks;

export const makeSelectCurrentRoute = () =>
    createSelector(selectRouter, routerState => routerState ? routerState.location.pathname : undefined);

export const makeSelectCurrentPage = () =>
    createSelector(selectPages, pagesState => pagesState ? pagesState.currentPage : undefined);

export const makeSelectCurrentTask = () =>
    createSelector(selectTasks, tasksState => tasksState ? tasksState.currentTask : undefined);