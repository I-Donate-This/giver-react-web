import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {History} from 'history';
import {pagesReducer} from "./pages/reducers";
import {tasksReducer} from "./tasks/reducers";

export default (history: History) => combineReducers({
    router: connectRouter(history),
    pages: pagesReducer,
    tasks: tasksReducer,
});
