import {Action} from "redux";

export const PAGES_LOAD_PAGE = '[PAGES] Load Page';
export interface LoadPageAction extends Action {
    payload: PageInfo;
}

export interface CancelTaskAction extends Action {}

export interface PageInfo {
    route: string;
    navTitle: string
}

export const loadPage = (pageInfo: PageInfo): LoadPageAction => ({type: PAGES_LOAD_PAGE, payload: pageInfo});
