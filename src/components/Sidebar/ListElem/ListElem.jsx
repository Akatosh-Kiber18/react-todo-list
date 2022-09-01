import React from 'react';
import style from './ListElem.module.css'
import {Link} from "react-router-dom";

const ListElem = (props) => {
    return (
        <div>
            <Link to={"/lists/" + props.list.id}><h3 className={style.listName}>{props.list.name} ({props.count})</h3></Link>
        </div>
    );
};

export default ListElem;