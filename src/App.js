import './App.css';
import TodoListSidebar from "./components/sidebar/TodoListSidebar";
import TaskList from "./components/taskList/TaskList";
import NewTaskForm from "./components/taskForm/NewTaskForm";

function App(props) {
    return (
        <div className="App">
            <TodoListSidebar lists={props.state.lists} showCompleted={props.state.showCompletedTasks}/>
            <TaskList  lists={props.state.lists}/>
            <NewTaskForm lists={props.state.lists}/>
        </div>
    );
}

export default App;
