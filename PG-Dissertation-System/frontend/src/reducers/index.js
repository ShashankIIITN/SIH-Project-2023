import { combineReducers } from "redux";

import Dissertions from "./dissertationsReducers.js"
import userRelActions from "./userRelActions.js";

export default combineReducers({dissertations:Dissertions, isLoggedin:userRelActions, searchString:"",})