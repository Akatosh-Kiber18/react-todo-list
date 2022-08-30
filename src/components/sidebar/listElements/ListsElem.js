import React from 'react';
import style from './ListElem.module.css'

const ListsElem = (props) => {
    return (
        <div>
            <h3 className= {style.listName}>{props.list.name}</h3>
        </div>
    );
};

export default ListsElem;