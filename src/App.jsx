import './App.css';
import TodoListSidebar from "./components/Sidebar/TodoListSidebar";
import TaskList from "./components/TaskList/TaskList";
import {Route, Routes, useSearchParams} from "react-router-dom";
import {useState} from "react";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import {getLists} from "./rest/list.rest";
import {deleteTask, getTask, getTasks, patchTask, postTask} from "./rest/task.rest";

function App() {
    const [searchParams, setSearchParams] = useSearchParams();

    let initState = {
        showCompletedTasks: searchParams.get('completed') === 'true',
        lists: [],
        tasks: []
    }
    const [appState, setAppState] = useState(initState);

    if (appState.lists.length === 0) {
        getLists()
            .then(res => setAppState({...appState, lists: res.data}))
    }
    if (appState.tasks.length === 0) {
        getTasks()
            .then(res => setAppState({...appState, tasks: res.data}))
    }

    function switchShowCompletedTasks() {
        setSearchParams({"completed": String(!appState.showCompletedTasks)});
        setAppState({...appState, showCompletedTasks: !appState.showCompletedTasks});
    }

    function addTask(task) {
        postTask(task)
            .then(res => {
                getTask(res.data.id)
                    .then(newTask => setAppState({...appState, tasks: [...appState.tasks, newTask.data]}))
            })
    }

    function onDeleteTask(taskId) {
        deleteTask(taskId)
            .then(_ => setAppState(
                {
                    ...appState,
                    tasks: appState.tasks
                        .filter(t => t.id !== taskId)
                }))
    }

    function changeTaskStatus(taskId, done) {
        const task = appState.tasks.find(t => t.id === taskId)
        const oldTaskDone = task.done;
        task.done = done

        patchTask(task)
            .then(_ => getTask(taskId))
            .then(res => setAppState({
                ...appState,
                tasks: appState.tasks.map(t => {
                        if (t.id === taskId) {
                            return res.data;
                        }
                        return t;
                    }
                )
            }))
            .catch(_ => task.done = oldTaskDone)
    }

    return (
        <div className="App">
            <TodoListSidebar lists={appState.lists} tasks={appState.tasks}
                             showCompletedTasks={appState.showCompletedTasks}
                             switchShowCompletedTasks={switchShowCompletedTasks}/>
            <Routes>
                <Route path={'/'} element={<WelcomePage/>}/>
                <Route path='/lists/:id'
                       element={<TaskList tasks={appState.tasks}
                                          addTask={addTask}
                                          onDeleteTask={onDeleteTask}
                                          changeTaskStatus={changeTaskStatus}
                                          showCompletedTasks={appState.showCompletedTasks}
                       />}
                />
            </Routes>
        </div>
    );
}

export default App;
