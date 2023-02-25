import {Col, Spin} from "antd";

import {Searcher, PokemonList} from "@/components";
import logo from "@/statics/logo.svg";

import "./Home.css";
import {useFetchPokemons} from "@/hooks";

import {Link} from "react-router-dom";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const state = useFetchPokemons();

  return (
    <div className="Home">
      <Link to={`/favorites`}>Favorites</Link>
      <Col offset={10} span={4}>
        <img alt="Pokedux" src={logo} />
      </Col>
      <Col offset={8} span={8}>
        <Searcher />
      </Col>
      {state.loading ? (
        <Col className="spin-container" offset={12}>
          <Spin size="large" spinning={true} />
        </Col>
      ) : (
        <PokemonList pokemons={state.pokemons} />
      )}
    </div>
  );
};

export default Home;
