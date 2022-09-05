import React, {useEffect, useState} from 'react';
import ListElem from "./ListElem/ListElem";
import {NavLink} from "react-router-dom";
import {getLists} from "../../rest/list.rest";

const TodoListSidebar = ({showCompleted}) => {
    const [listState, setListState] = useState([]);

    useEffect(() => {
        getLists().then(l => setListState(l.data))
    }, [listState.length])

    let listsElements = listState.map(l =>
        <ListElem key={"list" + l.id} list={l} />
    )

    return (
        <div className="TodoListSidebar">
            <h1>Lists: </h1>
            {listsElements}
            <NavLink to={'/today'} className={({isActive}) => (isActive ? 'active' : 'inactive')}><h2>Tasks on
                Today</h2></NavLink>
            <NavLink to={'/'} className={({isActive}) => (isActive ? 'active' : 'inactive')}><h2> Home </h2></NavLink>
            <span className={"switcherContainer"}>
                <label className="switch">
                    <input type="checkbox" onChange={showCompleted}/>
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