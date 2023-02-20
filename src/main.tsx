import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";

import {pokemonsReducer} from "./reducers/pokemons";
import App from "./App";

import "./index.css";
import {Logger} from "@/middlewares/index";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = composeAlt(applyMiddleware(thunk, Logger));

const store = createStore(pokemonsReducer, composeEnhancers);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
