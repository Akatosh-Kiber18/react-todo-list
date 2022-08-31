import React from 'react';
import TaskElem from "./taskElements/TaskElem";
import {useParams} from "react-router-dom";
import NewTaskForm from "../taskForm/NewTaskForm";

const TaskList = (props) => {
    const params = useParams();
    const listId = +params.id;

    let tasks = props.tasks
        .filter(t => t.listId === listId)
        .map(t => <TaskElem key={t.id} task={t} />)

    return (
        <div className="TaskList">
              {tasks}
            <NewTaskForm listId={listId} tasks={props.tasks} />
        </div>
    );
};

export default TaskList;