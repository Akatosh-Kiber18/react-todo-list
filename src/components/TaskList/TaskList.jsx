import React, {useEffect, useState} from 'react';
import TaskElem from "./TaskElem/TaskElem";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import {useParams} from "react-router-dom";
import {getList} from "../../rest/list.rest";
import {deleteTask, getTask, patchTask, postTask} from "../../rest/task.rest";

const TaskList = () => {
    const listId = +useParams().id

    const [taskState, setTaskState] = useState([]);

     useEffect(() => {
         getList(listId).then(l => setTaskState(l.data.tasks))
     }, [listId])

    function addTask(task) {
        postTask(task)
            .then(res => {
                getTask(res.data.id)
                    .then(newTask => setTaskState([...taskState,  newTask.data]))
            })
    }

    function onDeleteTask(taskId) {
        deleteTask(taskId)
            .then(_ => setTaskState(taskState.filter(t => t.id !== taskId)))
    }

    function changeTaskStatus(taskId) {
        const task = taskState.find(t => t.id === taskId)
        const oldTaskDone = task.done;
        task.done = !task.done

        patchTask(task)
            .then(_ => getList(listId).then(l => setTaskState(l.data.tasks)))
            .catch(_ => task.done = oldTaskDone)
    }

    return (
        <div className="TaskList">
            <h1>Tasks list:</h1>
            {
                taskState
                    .map(t =>
                        <TaskElem key={t.id}
                                  task={t}
                                  onDeleteTask={onDeleteTask}
                                  changeTaskStatus={changeTaskStatus}
                        />
                    )
            }
            <NewTaskForm listId={listId} addTask={addTask}/>
        </div>
    );
};

export default TaskList;