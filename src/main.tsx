import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {applyMiddleware, compose, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";

import {Favorites, Home} from "@/pages";
import {rootReducer} from "@/reducers";
import "./index.css";
import {Logger} from "@/middlewares/index";
import {Navbar} from "@/components";

// const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeAlt = compose;

const composeEnhancers = composeAlt(applyMiddleware(thunk, Logger));

const store = createStore(rootReducer, composeEnhancers);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />,
      </>
    ),
  },
  {
    path: "/favorites",
    element: (
      <>
        <Navbar />
        <Favorites />,
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
