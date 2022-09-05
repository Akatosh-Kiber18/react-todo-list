import React from 'react';
import style from './ListElem.module.css'
import {NavLink} from "react-router-dom";
import './style.css'

const ListElem = ({list, count}) => {
    if (list == null) {
        return;
    }

   let countOfTasks = count ? "(" + count + ")" : "";

    return (
        <div>
            <NavLink to={"/lists/" + list.id}  className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            ><h3 className={style.listName}>{list.name} {countOfTasks}</h3></NavLink>
        </div>
    );
};

export default ListElem;