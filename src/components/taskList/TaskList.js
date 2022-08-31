import React from 'react';
import TaskElem from "./taskElements/TaskElem";
import NewTaskForm from "../taskForm/NewTaskForm";
import {useParams} from "react-router-dom";

const TaskList = ({tasks, addTask, deleteTask, changeTaskStatus}) => {
    const listId = +useParams().id
    return (
        <div className="TaskList">
            {
                tasks
                    .filter(t => t.listId === listId)
                    .map(t =>
                        <TaskElem key={t.id} task={t} deleteTask={deleteTask} changeTaskStatus={changeTaskStatus}/>
                    )
            }
            <NewTaskForm listId={listId} addTask={addTask}/>
        </div>
    );
};

export default TaskList;