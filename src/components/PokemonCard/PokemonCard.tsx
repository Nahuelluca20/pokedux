import {Card} from "antd";
import Meta from "antd/lib/card/Meta";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {Pokemon} from "@/models";
import {StartButton} from "@/components";
import {addFavorite} from "@/slices/favoritesSlice";

export interface PokemonCardInterface {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardInterface> = ({pokemon}) => {
  const [selectedPokemons, setSelectedPokemons] = useState<Pokemon[]>([]);
  const dispatch = useDispatch();
  const favoritePokemon = useSelector((state: any) => state.favorites);

  const typesString = pokemon.types?.map((elem) => elem.type?.name).join(", ");

  const findPokemon = (pokemon: Pokemon) =>
    !!favoritePokemon.find((p: Pokemon) => p.id === pokemon.id);
  const filterPokemon = (pokemon: Pokemon) =>
    favoritePokemon.filter((p: Pokemon) => p.id !== pokemon.id);

  const handleFavorite = () => {
    const filteredPokemon = findPokemon(pokemon)
      ? filterPokemon(pokemon)
      : [...selectedPokemons, pokemon];

    dispatch(addFavorite(filteredPokemon));

    setSelectedPokemons(filteredPokemon);
  };

  useEffect(() => {
    setSelectedPokemons(favoritePokemon);
  }, [favoritePokemon]);

  return (
    <Card
      cover={<img alt="Ditto" src={pokemon.image} />}
      extra={<StartButton isFavorite={findPokemon(pokemon)} onClick={() => handleFavorite()} />}
      title={pokemon.name}
    >
      <Meta description={typesString} />
    </Card>
  );
};

export default PokemonCard;
