import React from 'react';
import TaskElem from "./taskElements/TaskElem";

const TaskList = (props) => {
    let tasks = props.lists.map(l => l.tasks.map(t => <TaskElem key={t.id} task={t} list={l} />))
    return (
        <div className="TaskList">
             {tasks}
        </div>
    );
};

export default TaskList;