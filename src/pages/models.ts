import {CancelTaskAction, LoadPageAction, PageInfo} from "./actionCreators";

export interface PagesState {
    currentPage?: PageInfo;
}

export interface PageProps {
    activatedRoute: string;
    onPageLoad: (pageInfo: PageInfo) => LoadPageAction;
    onCancelTask: () => CancelTaskAction;
}
