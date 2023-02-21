import {Card} from "antd";
import Meta from "antd/lib/card/Meta";
import {useDispatch} from "react-redux";

import {Pokemon} from "@/models";
import {StartButton} from "@/components";
import {setFavorite} from "@/slices/dataSlice";

export interface PokemonCardInterface {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardInterface> = ({pokemon}) => {
  const dispatch = useDispatch();
  const typesString = pokemon.types?.map((elem) => elem.type?.name).join(", ");

  const handleFavorite = () => {
    dispatch(setFavorite(pokemon.id));
  };

  return (
    <Card
      cover={<img alt="Ditto" src={pokemon.image} />}
      extra={<StartButton isFavorite={pokemon.favorite} onClick={handleFavorite} />}
      title={pokemon.name}
    >
      <Meta description={typesString} />
    </Card>
  );
};

export default PokemonCard;
