import axios from "axios";
import {getTasksAction, postTaskAction} from "../store/tasks/tasksReducer";

export function onError(error) {
    alert(error)
    return Promise.reject(error)
}

export function getTasks() {
   return function (dispatch) {
       axios.get("http://localhost:3000/tasks")
           .then(res => dispatch(getTasksAction(res.data)))
           .catch(onError);
   }
}

export function postTask(task) {
   return function (dispatch) {
       axios.post("http://localhost:3000/tasks", task)
           .then(res => dispatch(postTaskAction(res.data)))
           .catch(onError);
   }
}

export function deleteTask(id) {
    return axios.delete("http://localhost:3000/tasks/" + id)
        .catch(onError);
}

export function patchTask(task) {
    return axios.patch("http://localhost:3000/tasks/" + task.id, task)
        .catch(onError);
}

export function getTodayTasks() {
    return axios.get("http://localhost:3000/collection/today")
        .catch(onError);
}