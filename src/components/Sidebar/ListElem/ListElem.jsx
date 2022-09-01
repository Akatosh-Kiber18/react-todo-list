import React from 'react';
import style from './ListElem.module.css'
import {Link} from "react-router-dom";

const ListElem = ({list, count, showCompletedTasks}) => {
    return (
        <div>
            <Link to={"/lists/" + list.id + '?completed=' + String(showCompletedTasks)}><h3 className={style.listName}>{list.name} ({count})</h3></Link>
        </div>
    );
};

export default ListElem;