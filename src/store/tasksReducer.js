const GET_TASKS = "GET_TASKS";
const GET_TODAY_TASKS = "GET_TODAY_TASKS";

const ADD_TASK = "ADD_TASK";

const DELETE_TASK = "DELETE_TASK";
const DELETE_TODAY_TASK = "DELETE_TODAY_TASK";

const UPDATE_TASK = "UPDATE_TASK";
const UPDATE_TODAY_TASK = "UPDATE_TODAY_TASK";


export function taskReducer(state = {}, action) {
    switch (action.type) {
        case GET_TASKS:
            return {...state,
                [action.payload.listId]:action.payload.tasks}
        case GET_TODAY_TASKS:
            return {...state,
                tasksToday: [...action.payload]}

        case ADD_TASK:
            return {...state,
                [action.payload.list.id]: [...state[action.payload.list.id], action.payload]}

        case DELETE_TASK:
            return {...state,
                [action.payload.list.id]: state[action.payload.list.id]
                    .filter(t => t.id !== action.payload.id)}
        case DELETE_TODAY_TASK:
            return {...state,
                tasksToday: state.tasksToday
                    .filter(t => t.id !== action.payload)}

        case UPDATE_TASK:
            return {...state,
                [action.payload.list.id]: state[action.payload.list.id]
                    .map(t => t.id === action.payload.id ? action.payload : t)}
        case UPDATE_TODAY_TASK:
            return {...state,
                tasksToday: state.tasksToday
                    .filter(t => t.id !== action.payload.id)}

        default:
            return state
    }
}

export const getTasksAction = (payload) => ({type: GET_TASKS, payload})
export const getTodayTasksAction = (payload) => ({type: GET_TODAY_TASKS, payload})

export const postTaskAction = (payload) => ({type: ADD_TASK, payload})

export const deleteTaskAction = (payload) => ({type: DELETE_TASK, payload})
export const deleteTodayTaskAction = (payload) => ({type: DELETE_TODAY_TASK, payload})

export const updateTaskAction = (payload) => ({type: UPDATE_TASK, payload})
export const updateTodayTaskAction = (payload) => ({type: UPDATE_TODAY_TASK, payload})
