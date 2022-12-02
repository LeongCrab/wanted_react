import { combineReducers } from "redux";

import bookmark from "./bookmark";
import login from './login';
import modal from './modal';

const rootReducer = combineReducers({
    bookmark,
    login,
    modal,
});

export default rootReducer;