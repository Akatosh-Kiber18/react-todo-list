import React, {useEffect} from 'react';
import ListElem from "./ListElem/ListElem";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadDashboard} from "../../store/loadDashboardAction";

const TodoListSidebar = ({showCompleted}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadDashboard())
    }, [dispatch]);



    const lists = useSelector(state => state.lists)
    // useEffect(() => {
    //     dispatch(getTodayTasksCount())
    // }, [])
    //
    // const taskCount = useSelector(state => state.listReducer.openTasksOnTodayCount)
    //
    // console.log(taskCount);

    let listsElements = lists.map(l =>
        <ListElem key={"list" + l.id} list={l} count={l.undone} />
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