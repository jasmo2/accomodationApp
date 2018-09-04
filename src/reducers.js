import { combineReducers } from "redux";
import modal from "./components/Modal/reducer.js";
import app from "./components/App/reducer.js";

export default combineReducers({
    modal, app
});
