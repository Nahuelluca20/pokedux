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
    // setPokemons: (state, action) => {
    //   state.pokemons = action.payload;
    //   state.pokemonsFiltered = action.payload;
    // },
    // setFilter: (state, action) => {
    //   const pokemonsFiltered = state.pokemons.filter((pokemon: Pokemon) =>
    //     pokemon.name.includes(action.payload.toLowerCase()),
    //   );

    //   state.pokemonsFiltered = pokemonsFiltered;
    // },
    // addFavorite: (state, action) => {
    //   const currentPokemonIndex = state.pokemonsFiltered.findIndex((pokemon) => {
    //     return pokemon.id === action.payload;
    //   });

    //   if (currentPokemonIndex >= 0) {
    //     const isFavorite = state.pokemonsFiltered[currentPokemonIndex].favorite;

    //     state.pokemonsFiltered[currentPokemonIndex].favorite = !isFavorite;
    //     if (state.pokemonsFiltered[currentPokemonIndex].favorite === true) {
    //       state.pokemonsFavorites.push(state.pokemonsFiltered[currentPokemonIndex]);
    //     }
    //   }
    // },
    // setFavorite: (state, action) => {
    //   const currentPokemonIndex = state.pokemonsFiltered.findIndex((pokemon) => {
    //     return pokemon.id === action.payload;
    //   });

    //   if (currentPokemonIndex >= 0) {
    //     const isFavorite = state.pokemonsFiltered[currentPokemonIndex].favorite;

    //     state.pokemonsFiltered[currentPokemonIndex].favorite = !isFavorite;

    //     if (state.pokemonsFiltered[currentPokemonIndex].favorite === true) {
    //       state.pokemonsFavorites.push(state.pokemonsFiltered[currentPokemonIndex]);
    //     } else {
    //       state.pokemonsFavorites.splice(currentPokemonIndex, 1);
    //     }
    //   }
    // },
  },
});

export const {addPokemons} = dataSlice.actions;
// console.log(dataSlice);
export default dataSlice.reducer;
