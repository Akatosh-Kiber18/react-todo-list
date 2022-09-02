import React from 'react';
import ListElem from "./ListElem/ListElem";
import {Link} from "react-router-dom";

const TodoListSidebar = ({lists}) => {
    let listsElements = lists.map(l =>
        <ListElem key={"list" + l.id} list={l}/>
    )
    return (
        <div className="TodoListSidebar">
            <h1>Lists: </h1>
            {listsElements}
            <Link to={'/today'}><h2>Tasks on Today</h2></Link>
            <Link to={'/'}><h2> Home </h2></Link>
            <span className={"switcherContainer"}>
                <label className="switch">
                    <input type="checkbox" />
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