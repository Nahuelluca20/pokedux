import {combineReducers} from "redux";

import {dataSlice, uiSlice} from "@/slices";

const rootReducer = combineReducers({
  data: dataSlice,
  ui: uiSlice,
});

export default rootReducer;
