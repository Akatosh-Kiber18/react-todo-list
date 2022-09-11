import {DASHBOARD_LOADED} from "./loadDashboardAction";

export function listReducer(state = [], action) {
    switch (action.type) {
        case DASHBOARD_LOADED:
            return action.payload;

        default:
            return state;
    }
}

export const getListsAction = (payload) => ({ type: DASHBOARD_LOADED, payload })