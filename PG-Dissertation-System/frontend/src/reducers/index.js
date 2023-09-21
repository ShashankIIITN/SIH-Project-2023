import { combineReducers } from "redux";

import posts from "./posts.js"
import uiactions from "./uiactions.js"

export default combineReducers({posts:posts, SideBarState:uiactions})