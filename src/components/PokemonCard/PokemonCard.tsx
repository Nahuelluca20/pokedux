import {Card} from "antd";
import {StarOutlined} from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";

import {Pokemon} from "@/models";

export interface PokemonCardInterface {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardInterface> = ({pokemon}) => {
  return (
    <Card
      cover={<img alt="Ditto" src={pokemon.image} />}
      extra={<StarOutlined />}
      title={pokemon.name}
    >
      <Meta description="fire, magic" />
    </Card>
  );
};

export default PokemonCard;
