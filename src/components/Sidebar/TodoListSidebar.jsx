import React, {useEffect} from 'react';
import ListElem from "./ListElem/ListElem";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadDashboard} from "../../store/loadDashboardAction";
import {selectLists} from "../../store/selectLists";

const TodoListSidebar = ({showCompleted}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadDashboard())
    }, []);

    const lists = useSelector(state => state.lists.lists)||[]
    const undone = useSelector(state => state.lists.today)||[]

    const state = useSelector(state => state)

    console.log(state);

    let listsElements = lists.map(l =>
        <ListElem key={"list" + l.id} list={l} count={l.undone} />
    )

    return (
        <div className="TodoListSidebar">
            <h1>Lists: </h1>
            {listsElements}
            <NavLink to={'/today'} className={({isActive}) => (isActive ? 'active' : 'inactive')}><h2>Tasks on
                Today ({undone})</h2></NavLink>
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