import React from 'react';
import style from  './TaskElem.module.css'

const TaskElem = (props) => {
    let task = props.task

    return (
        <div >
            <div id={task.id} className= {style.taskDetails}>
                <div className= {style.taskDetailsStripGrey}></div>
                <h4 className={style.taskDetailsDueDate}>{task.dueDate}</h4>
                <input type="checkbox" className={style.checkbox}/>
                <label className={style.taskDetailsName}>{task.name}</label>
                <p>{task.description}</p>
                <span>
                    <button >Delete</button>
                </span>
            </div>
        </div>
    );
};

export default TaskElem;