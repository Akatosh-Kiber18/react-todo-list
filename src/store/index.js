import {createStore} from "redux";

const store = createStore()
 
const ADD_TASK = "ADD_TASK";
const GET_TASKS = "GET_TASKS";
const DELETE_TASK = "DELETE_TASK";
const UPDATE_TASK = "UPDATE_TASK";



let state = {
    dashboard: {
        today: 1,
        lists: [
            {id: 42, name: 'inCamp'}
        ],
        openedTasks: {
            42: 1,
            43: 1
        }
    },
    tasks: {
        42: [
            { id: 421, name: 'Learn Redux', done: false }
        ],
        43: [
            {id: 531, name: 'Learn React', done: true},
            {id: 532, name: 'Learn redux thunk', done: false}
        ]
    }
};

const reducer = (state, action) => {
    switch (action.type) {


        default:
            return state
    }

}

