import {useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {fetchPokemonsWithDetails} from "@/slices/dataSlice";

export const useFetchPokemons = () => {
  const pokemons = useSelector((state: any) => state.data, shallowEqual);

  // const pokemons = useSelector((state: any) => state.data.pokemons, shallowEqual);
  // state.getIn(["data", "pokemons"], shallowEqual),
  // const favorites = useSelector((state: any) => state.data.pokemonsFavorites, shallowEqual);

  const loading = useSelector((state: any) => state.ui.loading, shallowEqual);
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return {pokemons, loading};
};
