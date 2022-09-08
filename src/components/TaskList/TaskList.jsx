import TaskElem from "./TaskElem/TaskElem";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteTaskAction, updateTaskAction} from "../../store/tasksReducer";
import {getList} from "../../rest/list.rest";

const TaskList = ({showCompleted}) => {
    const listId = +useParams().id;

    const dispatch = useDispatch();

    const deleteAction = deleteTaskAction;
    const updateAction = updateTaskAction;

    useEffect(() => {
        dispatch(getList(listId))
    }, [dispatch, listId]);

    const tasks = useSelector(state => state.tasks.tasks)

    const taskListEl = tasks.map(t =>
        <TaskElem key={t.id}
                  task={t}
                  showCompleted={showCompleted}
                  dispatch={dispatch}
                  listId={listId}
                  deleteAction={deleteAction}
                  updateAction={updateAction}
        />
    )

    return (
        <div className="TaskList">
            <h1>Task List:</h1>
            {taskListEl}
            <NewTaskForm listId={listId} dispatch={dispatch}/>
        </div>
    );
};

export default TaskList;