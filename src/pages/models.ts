import {LoadPageAction, PageInfo} from "./actionCreators";

export interface PageProps {
    onPageLoad: (pageInfo: PageInfo) => LoadPageAction;
}
