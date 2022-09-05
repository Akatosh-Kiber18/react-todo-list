import TaskElem from "../TaskList/TaskElem/TaskElem";
import {useTasks} from "../../hooks/useTasks";

const TodayTasksPage = ({showCompleted}) => {

    const endpoint = "http://localhost:3000/today";

    const {tasks, onDeleteTask, updateTask} = useTasks(endpoint);

    const tasksOnToday = tasks.map(t =>
        <TaskElem key={t.id}
                  task={t}
                  list={t.list}
                  showCompleted={showCompleted}
                  onDeleteTask={onDeleteTask}
                  updateTask={updateTask}
        />);

    return (
        <div>
            <h1>TASKS ON TODAY:</h1>
            {tasksOnToday}
        </div>
    );
};

export default TodayTasksPage;