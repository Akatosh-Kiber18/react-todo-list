import axios from "axios";
import {
    getTasksAction,
    getTodayTasksAction,
    postTaskAction,
} from "../store/tasksReducer";
import {getOpenTasksOnTodayCountAction} from "../store/listsReducer";

export function onError(error) {
    alert(error)
    return Promise.reject(error)
}


/////

export function getTasks() {
   return function (dispatch) {
       axios.get("http://localhost:3000/tasks")
           .then(res => dispatch(getTasksAction(res.data)))
           .catch(onError);
   }
}

export function getTodayTasks() {
    return function (dispatch) {
        axios.get("http://localhost:3000/today")
            .then(res => dispatch(getTodayTasksAction(res.data)))
            .catch(onError);
    }
}

export function getTodayTasksCount() {
    return function (dispatch) {
        axios.get("http://localhost:3000/dashboard")
            .then(res => dispatch(getOpenTasksOnTodayCountAction(res.data)))
            .catch(onError);
    }
}

export function postTask(task) {
   return function(dispatch) {
       axios.post("http://localhost:3000/tasks", task)
           .then(res => dispatch(postTaskAction(res.data)))
           .catch(onError);
   }
}

export function deleteTask(id, action) {
    return function(dispatch) {
        axios.delete("http://localhost:3000/tasks/" + id)
            .then(res => dispatch(action(res.data.id)))
            .catch(onError);
    }
}

export function patchTask(task, updateAction) {
    return function(dispatch) {
        axios.patch("http://localhost:3000/tasks/" + task.id, task)
            .then(res => dispatch(updateAction(res.data)))
            .catch(onError);
    }
}
