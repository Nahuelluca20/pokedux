import {SET_POKEMONS} from "./types";

import {Pokemon} from "@/models";

export interface SetPokemons {
  type: SET_POKEMONS;
  payload: Pokemon[];
}

export type SetPokemonAction = SetPokemons;

export function setPokemons(payload: Pokemon[]): SetPokemons {
  return {
    type: SET_POKEMONS,
    payload,
  };
}
