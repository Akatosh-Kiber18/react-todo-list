import React from 'react';
import style from './ListElem.module.css'
import {NavLink} from "react-router-dom";
import './style.css'

const ListElem = ({list}) => {
    if (list == null) {
        return;
    }
    return (
        <div>
            <NavLink to={"/lists/" + list.id}  className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            ><h3 className={style.listName}>{list.name} </h3></NavLink>
        </div>
    );
};

export default ListElem;