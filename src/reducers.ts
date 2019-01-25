import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {History} from 'history';
import {pagesReducer} from "./pages/reducers";
import {tasksReducer} from "./tasks/reducers";
import {navigatorReducer} from "./Navigator/reducers";
import {loginReducer} from './containers/LoginFormContainer/reducers';

export default (history: History) => combineReducers({
    router: connectRouter(history),
    navigator: navigatorReducer,
    pages: pagesReducer,
    tasks: tasksReducer,
    auth: loginReducer,
});
