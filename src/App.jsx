import './App.css';
import TodoListSidebar from "./components/sidebar/TodoListSidebar";
import TaskList from "./components/taskList/TaskList";
import {Route, Routes} from "react-router-dom";
import {useState} from "react";

function App() {
    let initState = {
        showCompletedTasks: false,
        lists: [
            {
                "id": 20,
                "name": "Todo",
            },
            {
                "id": 21,
                "name": "Sometime",
            },
            {
                "id": 22,
                "name": "Must have",
            }
        ],
        tasks: [
            {
                "done": false,
                "id": 62,
                "name": "new tasdaask3",
                "dueDate": "2022-08-21",
                "description": "description of new task2",
                "listId": 20
            },
            {
                "done": false,
                "id": 69,
                "name": "new",
                "dueDate": "2022-08-21",
                "description": "description of new task2",
                "listId": 20
            },
            {
                "done": false,
                "id": 61,
                "name": "new taasdsk2",
                "dueDate": "2022-08-21",
                "description": "description of new task2",
                "listId": 20
            },
            {
                "done": false,
                "id": 60,
                "name": "new task1",
                "dueDate": "2022-08-21",
                "description": "description of new task2",
                "listId": 20
            },
            {
                "done": false,
                "id": 65,
                "name": "new tasdasdask3",
                "dueDate": "2022-08-21",
                "description": "description of new task3",
                "listId": 21
            },
            {
                "done": false,
                "id": 64,
                "name": "new task2",
                "dueDate": "2022-08-21",
                "description": "description of new task2",
                "listId": 21
            },
            {
                "done": false,
                "id": 63,
                "name": "task1",
                "dueDate": "2022-08-21",
                "description": "description of new task1",
                "listId": 21
            },
            {
                "done": false,
                "id": 68,
                "name": "task3",
                "dueDate": "2022-08-21",
                "description": "description of new task3",
                "listId": 22
            },
            {
                "done": false,
                "id": 67,
                "name": "task2",
                "dueDate": "2022-08-21",
                "description": "description of new task2",
                "listId": 22
            },
            {
                "done": false,
                "id": 66,
                "name": "new task1",
                "dueDate": "2022-08-21",
                "description": "description of new task1",
                "listId": 22
            }
        ]
    }
    const [appState, setAppState] = useState(initState);

    function addTask(task) {
        task.id = Math.floor(Math.random() * 1000000);

        setAppState(
            {...appState, tasks: [...appState.tasks, task]})
    }

    function deleteTask(taskId) {
        setAppState(
            {
                ...appState,
                tasks: appState.tasks
                    .filter(t => t.id !== taskId)
            })
    }

    function changeTaskStatus(taskId) {
        setAppState(
            {
                ...appState,
                tasks: appState.tasks.map(t => t.id === taskId ? {
                    done: !t.done,
                    id: t.id,
                    name: t.name,
                    dueDate: t.dueDate,
                    description: t.description,
                    listId: t.listId
                } : t)
            })
    }

    return (
        <div className="App">
            <TodoListSidebar lists={appState.lists} tasks={appState.tasks}/>
            <Routes>
                <Route path='/lists/:id'
                       element={<TaskList tasks={appState.tasks}
                                          addTask={addTask}
                                          deleteTask={deleteTask}
                                          changeTaskStatus={changeTaskStatus}/>}
                />
            </Routes>
        </div>
    );
}

export default App;
