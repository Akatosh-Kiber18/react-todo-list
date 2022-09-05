import axios from "axios";
import {onError} from "./task.rest";

export function getLists() {
   return axios.get("http://localhost:3000/lists")
       .catch(onError);
}
//
// export function getList(id) {
//    return axios.get("http://localhost:3000/lists/" +id)
//        .catch(onError);
// }