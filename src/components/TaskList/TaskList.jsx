import React from 'react';
import TaskElem from "./TaskElem/TaskElem";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import {useParams} from "react-router-dom";

const TaskList = ({tasks, addTask, onDeleteTask, changeTaskStatus, showCompletedTasks}) => {
    const listId = +useParams().id
    return (
        <div className="TaskList">
            {
                tasks
                    .filter(t => t.list.id === listId)
                    .map(t =>
                        <TaskElem key={t.id}
                                  task={t}
                                  onDeleteTask={onDeleteTask}
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