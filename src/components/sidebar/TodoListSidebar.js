import React from 'react';
import ListsElem from "./listElements/ListsElem";

const TodoListSidebar = (props) => {
    let listsElements = props.lists.map(l => <ListsElem key={l.id} list={l} />)

    return (
        <div className="TodoListSidebar">
            <h1>Lists: </h1>
            {listsElements}
        </div>
    );
};

export default TodoListSidebar;