import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getPokemonWithDetails, setPokemonLoading} from "@/actions";
import {getPokemons} from "@/api";
import {Pokemons} from "@/models";

export const useFetchPokemons = () => {
  const pokemons = useSelector((state: Pokemons) => state.pokemons);
  const loading = useSelector((state: any) => state.loading);

  console.log(loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setPokemonLoading(true));
      const pokemons = await getPokemons();

      dispatch(getPokemonWithDetails(pokemons));
      dispatch(setPokemonLoading(false));
    };

    fetchPokemons();
  }, []);

  return {pokemons, loading};
};
