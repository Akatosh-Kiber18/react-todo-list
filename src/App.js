import './App.css';
import TodoListSidebar from "./components/sidebar/TodoListSidebar";
import TaskList from "./components/taskList/TaskList";
import NewTaskForm from "./components/taskForm/NewTaskForm";
import {Route, Routes} from "react-router-dom";

function App(props) {
    return (
        <div className="App">
            <TodoListSidebar lists={props.state.lists} />
            <Routes>
            <Route path='/lists/:id' element={<TaskList tasks={props.state.tasks} />} />
            <Route path='/lists/:id' element={<NewTaskForm tasks={props.state.tasks} />} />
            </Routes>
        </div>
    );
}

export default App;
