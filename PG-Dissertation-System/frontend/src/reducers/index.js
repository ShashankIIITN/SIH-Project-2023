import { combineReducers } from "redux";

import Dissertions from "./dissertationsReducers.js"
import userRelActions from "./userRelActions.js";
import Tickets from "./TicketReducers.js"
import Playlists from "./playlistReducers"

export default combineReducers({dissertations:Dissertions, isLoggedin:userRelActions, searchString:"", tickets:Tickets, playlists:Playlists})