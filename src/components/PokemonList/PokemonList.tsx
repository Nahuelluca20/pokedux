import {PokemonCard} from "../PokemonCard";
import "./PokemonList.css";

import {Pokemon} from "@/models";

export interface PokemonListInterface {
  pokemons: Pokemon[];
}

const PokemonList: React.FC<PokemonListInterface> = ({pokemons}) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
