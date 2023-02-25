import {useState} from "react";
import {Col, Spin} from "antd";

import {Searcher, PokemonList} from "@/components";
import logo from "@/statics/logo.svg";

import "./Home.css";
import {useFetchPokemons} from "@/hooks";

import {Link} from "react-router-dom";

import {Pokemon} from "@/models";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const state = useFetchPokemons();
  const [pokemonSearched, setPokemonSearched] = useState<Pokemon[]>(state.pokemons);
  const handleChange = (e: string) => {
    setPokemonSearched(state.pokemons.filter((p: Pokemon) => p.name.includes(e)));
  };

  return (
    <div className="Home">
      <div className="logo-container">
        <img alt="Pokedux" src={logo} width={"100"} />
      </div>
      <div className="search-container">
        <div>
          <Searcher handleChange={handleChange} />
        </div>
      </div>
      {state.loading ? (
        <Col className="spin-container" offset={12}>
          <Spin size="large" spinning={true} />
        </Col>
      ) : (
        <PokemonList pokemons={pokemonSearched} />
      )}
    </div>
  );
};

export default Home;
