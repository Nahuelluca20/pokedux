import {SET_POKEMONS} from "./types";

import {getPokemonDetails} from "@/api";
import {Pokemon} from "@/models";

export interface SetPokemons {
  type: SET_POKEMONS;
  payload: any;
}

export type SetPokemonAction = SetPokemons;

export function setPokemons(payload: any): SetPokemons {
  return {
    type: SET_POKEMONS,
    payload,
  };
}

export const getPokemonWithDetails =
  (pokemons: Pokemon[] = []) =>
  async (dispatch: any) => {
    const pokemonDetailed = await Promise.all(
      pokemons.map((pokemon: Pokemon) => getPokemonDetails(pokemon)),
    );

    dispatch(setPokemons(pokemonDetailed));
  };
