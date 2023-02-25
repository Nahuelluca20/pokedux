import "./Favorites.css";
import {useSelector} from "react-redux";

import {PokemonList} from "@/components";

export interface FavoritesInterface {}

const Favorites: React.FC<FavoritesInterface> = () => {
  const favoritePokemon = useSelector((state: any) => state.favorites);

  return (
    <div className="Favorites">
      <div className="title-container">
        <h1>Favorites Pokemons:</h1>
      </div>
      <PokemonList pokemons={favoritePokemon} />
    </div>
  );
};

export default Favorites;
