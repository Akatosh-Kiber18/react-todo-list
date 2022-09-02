import './App.css';
import TodoListSidebar from "./components/Sidebar/TodoListSidebar";
import TaskList from "./components/TaskList/TaskList";
import {Route, Routes} from "react-router-dom";
import {useState} from "react";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import {getLists} from "./rest/list.rest";

function App() {
    let initState = {
        showCompletedTasks: false,
        lists: [],
    }
    const [appState, setAppState] = useState(initState);

    if (appState.lists.length === 0) {
        getLists()
            .then(res => setAppState({...appState, lists: res.data}))
    }

    return (
        <div className="App">
            <TodoListSidebar lists={appState.lists}/>
            <Routes>
                <Route path={'/'} element={<WelcomePage/>}/>
                <Route path='/lists/:id'
                       element={<TaskList />}
                />
            </Routes>
        </div>
    );
}

export default App;
