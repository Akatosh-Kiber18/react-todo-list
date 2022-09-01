import React from 'react';
import ListElem from "./ListElem/ListElem";
import {Link} from "react-router-dom";

const TodoListSidebar = ({lists, tasks, showCompletedTasks, switchShowCompletedTasks}) => {
    let listsElements = lists.map(l =>
        <ListElem key={"list" + l.id} list={l} showCompletedTasks={showCompletedTasks} count={tasks.filter(t => t.list.id === l.id).length}/>
    )
    return (
        <div className="TodoListSidebar">
            <h1>Lists: </h1>
            {listsElements}
            <Link to={'/'}><h3>Home</h3></Link>
            <span className={"switcherContainer"}>
                <label className="switch">
                    <input type="checkbox" checked={showCompletedTasks} onChange={switchShowCompletedTasks}/>
                    <span className="slider round"></span>
                </label>
                <span style={{paddingLeft: '15px'}}>
                Show completed tasks
                </span>
            </span>
        </div>
    );
};

export default TodoListSidebar;