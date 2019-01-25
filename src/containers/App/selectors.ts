import {createSelector} from 'reselect';
import {ApplicationState} from "../../configureStore";

const selectRouter = (state: ApplicationState) => state.router;
const selectPages = (state: ApplicationState) => state.pages;
const selectTasks = (state: ApplicationState) => state.tasks;
const selectNavigator = (state: ApplicationState) => state.navigator;
const selectAuth = (state: ApplicationState) => state.auth;

export const makeSelectCurrentRoute = () =>
    createSelector(selectRouter, routerState => routerState ? routerState.location.pathname : undefined);

export const makeSelectCurrentPage = () =>
    createSelector(selectPages, pagesState => pagesState ? pagesState.currentPage : undefined);

export const makeSelectCurrentTask = () =>
    createSelector(selectTasks, tasksState => tasksState ? tasksState.currentTask : undefined);

export const makeSelectNavigatoractivePagePath = () =>
    createSelector(selectNavigator, navigatorState => navigatorState ? navigatorState.activePagePath : undefined);

export const makeSelectIsUserAuthenticated = () =>
    createSelector(selectAuth, auth => auth ? auth.authenticated : false);