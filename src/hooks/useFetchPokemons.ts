import {useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {fetchPokemonsWithDetails} from "@/slices/dataSlice";

export const useFetchPokemons = () => {
  const pokemons = useSelector((state: any) => state.data.pokemonsFiltered);
  // const pokemons = useSelector((state: any) => state.data.pokemons, shallowEqual);
  // state.getIn(["data", "pokemons"], shallowEqual),

  const loading = useSelector((state: any) => state.ui.loading, shallowEqual);
  // state.getIn(["ui", "loading"])
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return {pokemons, loading};
};
