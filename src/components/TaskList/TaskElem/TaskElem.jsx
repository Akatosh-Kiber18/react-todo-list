import React, {useState} from 'react';
import style from './TaskElem.module.css'

const TaskElem = ({task, deleteTask, changeTaskStatus, showCompletedTasks}) => {
    const [isDone, setIsDone] = useState(task.done);

    const today = new Date();
    today.setHours(0,0,0);

    function onCheckboxClick(id) {
        changeTaskStatus(id);
        handleClick();
    }

    const handleClick = () => {
        setIsDone(done => !done)
    }

    function isOverdue (){
      return today > new Date(task.dueDate)
    }

    return (
        <div >
            <div id={task.id} className={style.taskDetails}
                 style={{
                     borderTopColor: isDone ? "green" : isOverdue() ? "red" : "gray",
                     display: isDone && !showCompletedTasks ? "none" : ""
                 }}>
                <h4 className={style.taskDetailsDueDate}
                    style={{
                        color: isDone ? "green" : isOverdue() ? "red" : "gray"
                    }}>
                    {task.dueDate || '[no due date]'}
                </h4>
                <input type="checkbox" className={style.checkbox} checked={task.done} onClick={() => onCheckboxClick(task.id)}/>
                <label className={style.taskDetailsName}
                       style={{
                           textDecoration: isDone ? "line-through" : "",
                           color: isDone ? "grey" : ""
                       }}>{task.name}</label>
                <p>{task.description || '[no description]'}</p>
                <span
                    style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        padding: "5px"
                }}>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </span>
            </div>
        </div>
    );
};

export default TaskElem;