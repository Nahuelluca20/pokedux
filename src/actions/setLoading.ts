import {SET_POKEMONS_LOADING} from "./types";

export interface SetPokemonLoading {
  type: SET_POKEMONS_LOADING;
  payload: boolean;
}

export type SetPokemonLoadingAction = SetPokemonLoading;

export function setPokemonLoading(payload: boolean): SetPokemonLoading {
  return {
    type: SET_POKEMONS_LOADING,
    payload,
  };
}
