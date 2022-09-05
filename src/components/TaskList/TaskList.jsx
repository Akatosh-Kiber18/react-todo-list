import TaskElem from "./TaskElem/TaskElem";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import {useParams} from "react-router-dom";
import {useTasks} from "../../hooks/useTasks";

const TaskList = ({showCompleted}) => {
    const listId = +useParams().id;

    const endpoint = "http://localhost:3000/tasks";

    const {tasks, onDeleteTask, updateTask, addTask} = useTasks(endpoint);

    const taskListEl = tasks.filter(t => t.list.id === listId).map(t =>
        <TaskElem key={t.id}
                  task={t}
                  onDeleteTask={onDeleteTask}
                  updateTask={updateTask}
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