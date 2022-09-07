import TaskElem from "./TaskElem/TaskElem";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getTasks, postTask} from "../../rest/task.rest";
import {useEffect} from "react";

const TaskList = ({showCompleted}) => {
    const listId = +useParams().id;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasks())
    }, []);

    const addTask = dispatch(() => postTask())

    const storeTasks = useSelector(state => state.taskReducer.tasks)

    const taskListEl = storeTasks.filter(t => t.list.id === listId).map(t =>
        <TaskElem key={t.id}
                  task={t}
            // onDeleteTask={onDeleteTask}
            // updateTask={updateTask}
                  showCompleted={showCompleted}
                  listId={listId}
        />
    )

    return (
        <div className="TaskList">
            <h1>Task List:</h1>
            {taskListEl}
            <NewTaskForm listId={listId} addTask={addTask}/>
        </div>
    );
};

export default TaskList;