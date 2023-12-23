// Root Reducer

import { combineReducers } from "redux";
import authUserReducer from "./authUser";
import eventReducer from "./eventReducer";
export let rootReducer = combineReducers({
    authUser: authUserReducer,
    myevent: eventReducer,
});

export default rootReducer;
