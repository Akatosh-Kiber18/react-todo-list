import TaskElem from "../TaskList/TaskElem/TaskElem";
import {useEffect} from "react";
import {getTodayTasks} from "../../rest/task.rest";
import {useDispatch, useSelector} from "react-redux";
import {
    deleteTodayTaskAction,
    updateTodayTaskAction
} from "../../store/tasksReducer";

const TodayTasksPage = ({showCompleted}) => {
    const dispatch = useDispatch();

    const deleteAction = deleteTodayTaskAction;
    const updateAction = updateTodayTaskAction;

    useEffect(() => {
        dispatch(getTodayTasks())
    }, []);

    const tasks = useSelector(state => state.taskReducer.tasksToday)

    const tasksOnToday = tasks.map(t =>
        <TaskElem key={t.id}
                  task={t}
                  list={t.list}
                  dispatch={dispatch}
                  showCompleted={showCompleted}
                  deleteAction={deleteAction}
                  updateAction={updateAction}
        />);

    return (
        <div>
            <h1>TASKS ON TODAY:</h1>
            {tasksOnToday}
        </div>
    );
};

export default TodayTasksPage;