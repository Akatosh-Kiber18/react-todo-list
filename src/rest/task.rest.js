import axios from "axios";

export function onError(error) {
    alert(error)
    return Promise.reject(error)
}

export function getTasks() {
   return axios.get("http://localhost:3000/tasks")
       .catch(onError);
}

export function getTask(id) {
    return axios.get("http://localhost:3000/tasks/" + id)
        .catch(onError);
}
export function postTask(task) {
   return axios.post("http://localhost:3000/tasks", task)
       .catch(onError);
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