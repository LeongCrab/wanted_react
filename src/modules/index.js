import { combineReducers } from "redux";
import bookmark from "./bookmark";
import login from './login';

const rootReducer = combineReducers({
    bookmark,
    login,
});

export default rootReducer;