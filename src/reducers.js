import { combineReducers } from "redux";
import modal from "./components/Modal/reducer.js";
import app from "./components/App/reducer.js";
import cards from "./components/Card/reducer.js";
import filters from "./components/FilterItem/reducer.js";

export default combineReducers({
    modal, app, cards, filters
});
