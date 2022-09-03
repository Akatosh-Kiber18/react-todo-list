import React, {useEffect, useState} from 'react';
import ListElem from "./ListElem/ListElem";
import {Link} from "react-router-dom";
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
            <Link to={'/today'}><h2>Tasks on Today</h2></Link>
            <Link to={'/'}><h2> Home </h2></Link>
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