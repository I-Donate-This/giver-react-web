import {LoadPageAction, PageInfo} from "./actionCreators";

export interface PagesState {
    currentPage?: PageInfo;
}

export interface PageProps {
    onPageLoad: (pageInfo: PageInfo) => LoadPageAction;
}
