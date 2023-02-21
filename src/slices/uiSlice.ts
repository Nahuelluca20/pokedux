import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

// export const setLoader = createAsyncThunk(
//   "data/setLoader",
//   async (_, {dispatch}) => {
//     // dispatch loader
//     // fetch
//     // dispatch loader

//     dispatch(setLoading());
//   },
// );

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {setLoading} = uiSlice.actions;
// console.log(dataSlice);
export default uiSlice.reducer;
