import {CancelTaskAction, LoadPageAction, PageInfo} from "./actionCreators";
import {ActivePageAction} from "../Navigator/actionCreators";

export interface PagesState {
    currentPage?: PageInfo;
}

export interface PageProps {
    activatedRoute: string;
    onPageLoad: (pageInfo: PageInfo) => LoadPageAction;
    onNavigated: (route: string) => ActivePageAction;
    onCancelTask: () => CancelTaskAction;
}
