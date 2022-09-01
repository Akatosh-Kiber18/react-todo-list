import React from 'react';
import ListElem from "./ListElem/ListElem";
import {Link} from "react-router-dom";

const TodoListSidebar = ({lists, tasks, switchShowCompletedTasks}) => {
    let listsElements = lists.map(l => <ListElem key={"list" + l.id} list={l}
                                                 count={tasks.filter(t => t.listId === l.id).length}/>)

    return (
        <div className="TodoListSidebar">
            <h1>Lists: </h1>
            {listsElements}
            <Link to={'/'}><h3>Home</h3></Link>
            <span className={"switcherContainer"}>
                <label className="switch">
                    <input type="checkbox" onClick={switchShowCompletedTasks}/>
                    <span className="slider round"></span>
                </label>
                <span>
                Show completed tasks
                </span>
            </span>
        </div>
    );
};

export default TodoListSidebar;