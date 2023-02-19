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
