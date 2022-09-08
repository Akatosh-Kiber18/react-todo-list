import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {taskReducer} from "./tasksReducer";
import {listReducer} from "./listsReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
  lists: listReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))