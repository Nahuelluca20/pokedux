import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {legacy_createStore as createStore} from "redux";

import {pokemonsReducer} from "./reducers/pokemons";
import App from "./App";
import "./index.css";

const store = createStore(pokemonsReducer);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
