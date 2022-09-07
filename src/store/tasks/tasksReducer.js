const GET_TASKS = "GET_TASKS";
const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const UPDATE_TASK = "UPDATE_TASK";

const initialState = {
    tasks: []
};

export function taskReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TASKS:
            return {...state, tasks: [...action.payload] }

        case ADD_TASK:
            return {...state, tasks: [...state.tasks, ...action.payload]}

        case DELETE_TASK:
            return {...state, tasks: state.tasks.filter(t => t.id !== action.payload)}

        case UPDATE_TASK:
            return {...state, tasks: state.tasks.map(t => t.id === action.payload.id ? action.payload : t)}

        default:
            return state
    }
}

export const getTasksAction = (payload) => ({type: GET_TASKS, payload})
export const postTaskAction = (payload) => ({type: ADD_TASK, payload})
