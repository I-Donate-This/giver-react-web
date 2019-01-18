import {Action} from "redux";

export const NAVIGATOR_START_PAGE_ACTION = '[NAVIGATOR] START_PAGE_ACTION';

export interface ActivePageAction extends Action {
    path: string;
}

export function activePage(path: string): ActivePageAction {
    return {
        type: NAVIGATOR_START_PAGE_ACTION,
        path: path
    };
}