import {createSlice, current} from "@reduxjs/toolkit";

import {getLocalStorage, setLocalStorage} from "@/utilities";
import {LocalStorageTypes, Pokemon} from "@/models";

const initialState: Pokemon[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: getLocalStorage(LocalStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(LocalStorageTypes.FAVORITES, action.payload);

      return action.payload;
    },
    revomeFavorite: (state, action) => {
      const filteredState = current(state).filter((p: Pokemon) => p.id !== action.payload.id);

      setLocalStorage(LocalStorageTypes.FAVORITES, filteredState);

      return filteredState;
    },
  },
});

export const {addFavorite, revomeFavorite} = favoritesSlice.actions;

export default favoritesSlice.reducer;
