import axios from "axios";

export function getRequests(endpoint) {
    return axios.get(endpoint);
}