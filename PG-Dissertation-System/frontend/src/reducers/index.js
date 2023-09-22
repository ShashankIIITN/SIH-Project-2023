import { combineReducers } from "redux";

import posts from "./posts.js"
import userRelActions from "./userRelActions.js";

export default combineReducers({posts:posts, isLoggedin:userRelActions})