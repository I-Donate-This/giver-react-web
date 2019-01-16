import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
import {composeWithDevTools} from "redux-devtools-extension";
import {PagesState} from "./pages/models";
import {TasksState} from "./tasks/models";

export interface ApplicationState {
    router?: any,
    pages?: PagesState,
    tasks?: TasksState,
}

export const history = createBrowserHistory();

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
    createRootReducer(history), // root reducer with router state
    {} as ApplicationState,
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history), // for dispatching history actions
            // ... other middlewares ...
        ),
    ),
);

