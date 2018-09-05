import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./components/App";

import reducers from "./reducers.js";

import { loadState, saveState } from "./utils/localService";

const ROOT = document.querySelector("#accomodationApp");
const persistedState = loadState();
const store = createStore(reducers, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
    saveState({
        cards: Array.from(store.getState().cards)
    })
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    ROOT
);