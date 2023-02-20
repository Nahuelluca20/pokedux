import {Middleware} from "redux";

export const Featuring: Middleware = (store) => (next) => (actionInfo) => {
  const featured = [{name: "eddie"}, ...actionInfo.action.payload];
  const updatedAction = {...actionInfo, action: {...actionInfo.action, payload: featured}};

  next(updatedAction);
};
