import {combineReducers} from "redux";

import {dataSlice, uiSlice, favoritesSlice} from "@/slices";

const rootReducer = combineReducers({
  data: dataSlice,
  ui: uiSlice,
  favorites: favoritesSlice,
});

export default rootReducer;
