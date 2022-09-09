import {DASHBOARD_LOADED} from "./loadDashboardAction";

const GET_TODAY_TASKS_COUNT = "GET_TODAY_TASKS_COUNT";

export function listReducer(state = [], action) {
    switch (action.type) {
        case DASHBOARD_LOADED:
            return action.payload;

        default:
            return state;
    }
}

export const getListsAction = (payload) => ({ type: DASHBOARD_LOADED, payload })
export const getOpenTasksOnTodayCountAction = (payload) => ({type: GET_TODAY_TASKS_COUNT, payload})