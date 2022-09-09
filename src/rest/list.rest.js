import axios from "axios";
import {onError} from "./task.rest";
import {getTasksAction} from "../store/tasksReducer";
import {getListsAction} from "../store/listsReducer";

export function getLists() {
    return function (dispatch) {
        axios.get("http://localhost:3000/lists")
            .then(res => dispatch(getListsAction(res.data)))
            .catch(onError);
    }
}

export function getTasks(id) {
    return function (dispatch) {
        axios.get("http://localhost:3000/lists/" + id)
            .then(res => dispatch(getTasksAction({
                tasks: res.data,
                listId: id
            })))
            .catch(onError);
    }
}