import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {taskReducer} from "./tasksReducer";

const rootReducer = combineReducers({
    taskReducer: taskReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))