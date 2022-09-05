import {useEffect, useState} from "react";
import {getRequests} from "../rest/useTasks.rest";
import {deleteTask, patchTask, postTask} from "../rest/task.rest";

export function useTasks(endpoint) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getRequests(endpoint).then(tasks => setTasks(tasks.data))
    }, [endpoint])

    function onDeleteTask(taskId) {
        deleteTask(taskId)
            .then(_ =>  getRequests(endpoint).then(tasks => setTasks(tasks.data)))
    }

    function updateTask(taskId) {
        const task = tasks.find(t => t.id === taskId)
        const oldTaskDone = task.done;
        task.done = !task.done

        patchTask(task)
            .then(_ =>  getRequests(endpoint)
            .then(tasks => setTasks(tasks.data)))
            .catch(_ => task.done = oldTaskDone)
    }

    function addTask(task) {
        postTask(task)
            .then(_ =>  getRequests(endpoint).then(tasks => setTasks(tasks.data)))
    }

    return {
        tasks,
        onDeleteTask,
        updateTask,
        addTask
    }
}
