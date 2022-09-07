import React from 'react';
import style from './TaskElem.module.css'
import ListElem from "../../Sidebar/ListElem/ListElem";

const TaskElem = ({task, showCompleted, listId}) => {
    const today = new Date();
    today.setHours(0,0,0);

    function isOverdue (){
      return today > new Date(task.dueDate)
    }
    let list = listId ? null : task.list;

    return (
        <div >
            <div id={task.id} className={style.taskDetails}
                 style={{
                     borderTopColor: task.done ? "green" : isOverdue() ? "red" : "gray",
                     display: task.done && !showCompleted ? "none" : ""
                 }}>
                <h4 className={style.taskDetailsDueDate}
                    style={{
                        color: task.done ? "green" : isOverdue() ? "red" : "gray"
                    }}>
                    {task.dueDate || '[no due date]'}
                </h4>
                <input id={'done-' + task.id} type="checkbox" className={style.checkbox} checked={task.done}/>
                <label className={style.taskDetailsName}
                       for={'done-' + task.id}
                       style={{
                           textDecoration: task.done ? "line-through" : "",
                           color: task.done ? "grey" : ""
                       }}>{task.name}</label>
                <p>{task.description || '[no description]'}</p>
                <span
                    style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        padding: "5px"
                }}>
                    <button >Delete</button>
                </span>
                <ListElem list={list}/>
            </div>
        </div>
    );
};

export default TaskElem;