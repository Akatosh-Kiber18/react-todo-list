import React, {useEffect, useState} from 'react';
import {deleteTask, getTodayTasks, patchTask} from "../../rest/task.rest";
import TaskElem from "../TaskList/TaskElem/TaskElem";

const TodayTasksPage = ({showCompleted}) => {

    const [todayTaskState, setTodayTaskState] = useState([]);

    useEffect(() => {
        getTodayTasks().then(todayTasks => setTodayTaskState(todayTasks.data))
    }, [todayTaskState.length])

    function onDeleteTask(taskId) {
        deleteTask(taskId)
            .then(_ => setTodayTaskState(todayTaskState.filter(t => t.id !== taskId)))
    }

    function changeTaskStatus(taskId) {
        const task = todayTaskState.find(t => t.id === taskId)
        const oldTaskDone = task.done;
        task.done = !task.done

        patchTask(task)
            .then(_ =>  getTodayTasks()
                .then(todayTasks => setTodayTaskState(todayTasks.data)))
            .catch(_ => task.done = oldTaskDone)
    }

    const tasksOnToday = todayTaskState.map(t =>
        <TaskElem key={t.id}
                  task={t}
                  list={t.list}
                  showCompleted={showCompleted}
                  onDeleteTask={onDeleteTask}
                  changeTaskStatus={changeTaskStatus}/>);

    return (
        <div>
            {tasksOnToday}
        </div>
    );
};

export default TodayTasksPage;