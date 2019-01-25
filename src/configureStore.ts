import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
import {composeWithDevTools} from "redux-devtools-extension";
import {PagesState} from "./pages/models";
import {TasksState} from "./tasks/models";
import {NavigatorState} from "./Navigator/reducers";
import thunkMiddleware from 'redux-thunk';
import {LoginState} from './containers/LoginFormContainer/reducers';

export interface ApplicationState {
    router?: any;
    navigator?: NavigatorState;
    pages?: PagesState;
    tasks?: TasksState;
    auth?: LoginState;
}

export const history = createBrowserHistory();

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
    createRootReducer(history), // root reducer with router state
    {} as ApplicationState,
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history), // for dispatching history actions
            thunkMiddleware
            // ... other middlewares ...
        ),
    ),
);

