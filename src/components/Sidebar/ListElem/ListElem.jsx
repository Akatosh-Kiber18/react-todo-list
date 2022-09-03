import React from 'react';
import style from './ListElem.module.css'
import {Link} from "react-router-dom";

const ListElem = ({list}) => {
    if (list == null) {
        return;
    }
    return (
        <div>
            <Link to={"/lists/" + list.id}><h3 className={style.listName}>{list.name}</h3></Link>
        </div>
    );
};

export default ListElem;