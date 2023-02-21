import axios from "axios";

import {Pokemon} from "@/models";

export const getPokemon = (pokemon: Pokemon) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
};

export const getPokemons = () => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
    .then((res) => res.data.results)
    .catch((error: Response) => console.error(error));
};

export const getPokemonDetails = (pokemon: Pokemon) => {
  return axios
    .get(pokemon.url)
    .then((res) => ({
      id: res.data.id,
      name: res.data.name,
      image: res.data.sprites.front_default,
      types: res.data.types,
    }))
    .catch((error: Response) => console.error(error));
};
