import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
import {composeWithDevTools} from "redux-devtools-extension";

export const history = createBrowserHistory();

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
    createRootReducer(history), // root reducer with router state
    {},
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history), // for dispatching history actions
            // ... other middlewares ...
        ),
    ),
);

