import {createSelector} from 'reselect';

const selectRouter = (state: any) => state.router;

export const makeSelectLocationPathname = () => createSelector(selectRouter, routerState => routerState.location.pathname);
