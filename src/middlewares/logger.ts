import {Middleware} from "redux";

export const Logger: Middleware = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};
