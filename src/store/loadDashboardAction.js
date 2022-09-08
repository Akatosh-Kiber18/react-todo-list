import axios from "axios";
import {getListsAction} from "./listsReducer";
import {onError} from "../rest/task.rest";

export const DASHBOARD_LOADED = 'dashboard/loaded';

export function loadDashboard() {
      return function (dispatch) {
          axios.get("http://localhost:3000/dashboard")
            .then(res => dispatch(getListsAction(res.data)))
            .catch(onError);
    }
}

    // fetch().then(
    // dispatch({ type: DASHBOARD_LOADED, payload: res.data })
