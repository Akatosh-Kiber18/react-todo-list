import React from 'react';
import TaskElem from "./TaskElem/TaskElem";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import {useParams} from "react-router-dom";

const TaskList = ({tasks, addTask, deleteTask, changeTaskStatus, showCompletedTasks}) => {
    const listId = +useParams().id
    return (
        <div className="TaskList">
            {
                tasks
                    .filter(t => t.listId === listId)
                    .map(t =>
                        <TaskElem key={t.id}
                                  task={t}
                                  deleteTask={deleteTask}
                                  changeTaskStatus={changeTaskStatus}
                                  showCompletedTasks={showCompletedTasks}
                        />
                    )
            }
            <NewTaskForm listId={listId} addTask={addTask}/>
        </div>
    );
};

export default TaskList;