import {createSlice, createAsyncThunk, current} from "@reduxjs/toolkit";

import {setLoading} from "./uiSlice";

import {getPokemonDetails, getPokemons} from "@/api";
import {Pokemon, LocalStorageTypes} from "@/models";
import {getLocalStorage, setLocalStorage} from "@/utilities";

const initialState: Pokemon[] = [];

export const fetchPokemonsWithDetails = createAsyncThunk(
  "data/fetchPokemonsWithDetails",
  async (_, {dispatch}) => {
    // dispatch loader
    dispatch(setLoading(true));
    // fetch
    // dispatch loader
    const pokemonsRes = await getPokemons();
    const pokemonDetailed = await Promise.all(
      pokemonsRes.map((pokemon: Pokemon) => getPokemonDetails(pokemon)),
    );

    dispatch(addPokemons(pokemonDetailed));
    dispatch(setLoading(false));
  },
);

export const dataSlice = createSlice({
  name: "data",
  initialState: getLocalStorage(LocalStorageTypes.POKEMONS)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.POKEMONS) as string)
    : initialState,
  reducers: {
    addPokemons: (state, action) => {
      setLocalStorage(LocalStorageTypes.POKEMONS, state);

      return action.payload;
    },
  },
});

export const {addPokemons} = dataSlice.actions;
// console.log(dataSlice);
export default dataSlice.reducer;
