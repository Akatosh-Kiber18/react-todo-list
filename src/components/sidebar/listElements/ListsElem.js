import React from 'react';
import style from './ListElem.module.css'
import {Link} from "react-router-dom";

const ListsElem = (props) => {
    return (
        <div>
            <Link to={"/lists/" + props.list.id}><h3 className={style.listName}>{props.list.name}</h3></Link>
        </div>
    );
};

export default ListsElem;