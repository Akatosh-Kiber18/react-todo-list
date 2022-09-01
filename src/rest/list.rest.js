import axios from "axios";
import {onError} from "./task.rest";

export function getLists() {
   return axios.get("http://localhost:3000/lists")
       .catch(onError);
}