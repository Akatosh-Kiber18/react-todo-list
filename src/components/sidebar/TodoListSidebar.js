import React from 'react';
import ListElem from "./ListElem/ListElem";

const TodoListSidebar = (props) => {
    let listsElements = props.lists.map(l => <ListElem key={"list"+l.id} list={l} count={props.tasks.filter(t => t.listId === l.id).length} />)

    return (
        <div className="TodoListSidebar">
            <h1>Lists: </h1>
                {listsElements}
        </div>
    );
};

export default TodoListSidebar;