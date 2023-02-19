import {SetPokemonAction} from "@/actions";
import {SET_POKEMONS} from "@/actions/types";
import {Pokemons} from "@/models";

const initialState = {
  pokemons: [],
};

export const pokemonsReducer = (
  state: Pokemons = initialState,
  action: SetPokemonAction,
): Pokemons => {
  switch (action.type) {
    case SET_POKEMONS:
      return {...state, pokemons: action.payload};
    default:
      return state;
  }
};
