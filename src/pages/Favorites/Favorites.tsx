import "./Favorites.css";
import {useSelector} from "react-redux";

import {PokemonList} from "@/components";

export interface FavoritesInterface {}

const Favorites: React.FC<FavoritesInterface> = () => {
  const favoritePokemon = useSelector((state: any) => state.favorites);

  console.log(favoritePokemon);

  return (
    <div className="Favorites">
      <h1>Estos son los favoritos:</h1>
      <PokemonList pokemons={favoritePokemon} />
    </div>
  );
};

export default Favorites;
