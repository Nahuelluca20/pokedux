import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {setLoading} from "./uiSlice";

import {getPokemonDetails, getPokemons} from "@/api";
import {Pokemon} from "@/models";

const initialState = {
  pokemons: [],
};

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

    dispatch(setPokemons(pokemonDetailed));
    dispatch(setLoading(false));
  },
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex((pokemon: any) => {
        return pokemon.id === action.payload;
      });

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;

        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
  },
});

export const {setPokemons, setFavorite} = dataSlice.actions;
// console.log(dataSlice);
export default dataSlice.reducer;
