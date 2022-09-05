import './App.css';
import TodoListSidebar from "./components/Sidebar/TodoListSidebar";
import TaskList from "./components/TaskList/TaskList";
import {Route, Routes} from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import {useState} from "react";
import TodayTasksPage from "./components/TodayTasksPage/TodayTasksPage";

function App() {
    const [showTasks, setShowTasks] = useState(false);

    function showCompletedTasksToggle() {
        setShowTasks(!showTasks);
    }

    return (
        <div className="App">
            <TodoListSidebar showCompleted={showCompletedTasksToggle}/>
            <Routes>
                <Route path={'/'} element={<WelcomePage/>}/>
                <Route path='/lists/:id'
                       element={<TaskList showCompleted={showTasks} />}
                />
                <Route path={'/today'} element={<TodayTasksPage showCompleted={showTasks}/>}/>
            </Routes>
        </div>
    );
}

export default App;
