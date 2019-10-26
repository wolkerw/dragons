import { combineReducers } from "redux";

import login from "./login";
import input from "./login";
import dragons from "./dragons";
import dragonList from "./dragonList";

export default combineReducers({
    login,
    dragons,
    dragonList,
    input
});
