import {Pokemon} from "./pokemon";

export interface Pokemons {
  getIn(arg0: string[]): any;
  get(arg0: string): any;
  pokemons: Pokemon[];
}
