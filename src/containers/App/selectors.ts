import {createSelector} from 'reselect';
import {ApplicationState} from "../../configureStore";

const selectPages = (state: ApplicationState) => state.pages;

export const makeSelectCurrentPage = () => createSelector(selectPages, pagesState => pagesState ? pagesState.currentPage : undefined);