import {useEffect} from "react";
import {Col} from "antd";
import {connect} from "react-redux";
import {Dispatch} from "redux";

import {Searcher, PokemonList} from "@/components";
import logo from "@/statics/logo.svg";
import {SetPokemonAction, setPokemons} from "@/actions";

import "./Home.css";
import {getPokemons} from "@/api";
import {Pokemon, Pokemons} from "@/models";

export interface HomeInterface {
  pokemons: any;
  setPokemons: any;
}

const Home: React.FC<HomeInterface> = ({pokemons, setPokemons}) => {
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemons = await getPokemons();

      setPokemons(pokemons);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="Home">
      <Col offset={10} span={4}>
        <img alt="Pokedux" src={logo} />
      </Col>
      <Col offset={8} span={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
};
const mapStateToProps = (state: Pokemons) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch: Dispatch<SetPokemonAction>) => ({
  setPokemons: (value: Pokemon[]) => dispatch(setPokemons(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
