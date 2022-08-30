import React from 'react';
import style from  './TaskElem.module.css'

const TaskElem = (props) => {
    let task = props.task

    function deleteTask() {
        const t = props.list.tasks.findIndex(t => t.id === task.id);
        props.list.tasks.splice(t, 1);
    }

    return (
        <div >
            <div id={task.id} className= {style.taskDetails}>
                <div className= {style.taskDetailsStripGrey}></div>
                <h4 className={style.taskDetailsDueDate}>{task.dueDate}</h4>
                <input type="checkbox" className={style.checkbox}/>
                <label className={style.taskDetailsName}>{task.name}</label>
                <p>{task.description}</p>
                <span>
                    <button onClick={deleteTask} >Delete</button>
                </span>
            </div>
        </div>
    );
};

export default TaskElem;