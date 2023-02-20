import {SetPokemonAction} from "@/actions";
import {SET_POKEMONS, SET_POKEMONS_LOADING} from "@/actions/types";
import {Pokemons} from "@/models";

const initialState = {
  pokemons: [],
  loading: false,
};

export const pokemonsReducer = (state: Pokemons = initialState, action: SetPokemonAction): any => {
  switch (action.type) {
    case SET_POKEMONS:
      return {...state, pokemons: action.payload};
    case SET_POKEMONS_LOADING:
      return {...state, loading: action.payload};
    default:
      return state;
  }
};
