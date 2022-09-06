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
            .then(res => setTasks(tasks.filter(t => t.id !== res.data.id)))
    }

    function updateTask(taskId) {
        const task = tasks.find(t => t.id === taskId)
        const oldTaskDone = task.done;
        task.done = !task.done

        patchTask(task)
            .then(res => {
                if (endpoint === "http://localhost:3000/today") {
                    setTasks(tasks.filter(t => t.id !== res.data.id))
                } else {
                    setTasks(tasks.map(t => t.id === res.data.id ? res.data : t))
                }
            })
            .catch(_ => task.done = oldTaskDone)
    }

    function addTask(task) {
        postTask(task)
            .then(t => setTasks([...tasks, t.data]))
    }

    return {
        tasks,
        onDeleteTask,
        updateTask,
        addTask
    }
}
