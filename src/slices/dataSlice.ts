import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {setLoading} from "./uiSlice";

import {getPokemonDetails, getPokemons} from "@/api";
import {Pokemon} from "@/models";

const initialState = {
  pokemons: <Pokemon[]>[],
  pokemonsFiltered: <Pokemon[]>[],
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
      state.pokemonsFiltered = action.payload;
    },
    setFilter: (state, action) => {
      const pokemonsFiltered = state.pokemons.filter((pokemon: Pokemon) =>
        pokemon.name.includes(action.payload.toLowerCase()),
      );

      state.pokemonsFiltered = pokemonsFiltered;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemonsFiltered.findIndex((pokemon) => {
        return pokemon.id === action.payload;
      });

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemonsFiltered[currentPokemonIndex].favorite;

        state.pokemonsFiltered[currentPokemonIndex].favorite = !isFavorite;
      }
    },
  },
});

export const {setPokemons, setFavorite, setFilter} = dataSlice.actions;
// console.log(dataSlice);
export default dataSlice.reducer;
