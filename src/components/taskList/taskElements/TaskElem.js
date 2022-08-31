import React, {useState} from 'react';
import style from './TaskElem.module.css'

const TaskElem = ({task, deleteTask, changeTaskStatus}) => {
    const [isDone, setIsDone] = useState(task.done);

    function onCheckboxClick(id) {
        changeTaskStatus(id);
        handleClick();
    }

    const handleClick = () => {
        setIsDone(done => !done)
    }
    return (
        <div>
            <div id={task.id} className={style.taskDetails}
                 style={{
                     borderTopColor: isDone ? "green" : "gray",
                 }}>
                <h4 className={style.taskDetailsDueDate}
                    style={{
                        color: isDone ? "green" : "gray",
                    }}>{task.dueDate || '[no due date]'}</h4>
                <input type="checkbox" className={style.checkbox} checked={task.done} onClick={() => onCheckboxClick(task.id)}/>
                <label className={style.taskDetailsName}
                       style={{
                           textDecoration: isDone ? "line-through" : "",
                           color: isDone ? "grey" : ""
                       }}>{task.name}</label>
                <p>{task.description}</p>
                <span>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </span>
            </div>
        </div>
    );
};

export default TaskElem;