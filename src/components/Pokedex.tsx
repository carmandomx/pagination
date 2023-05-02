import React from "react";
import { IInfoPokemon } from "../interfaces";
import Pokemon from "./Pokemon";

type Props = {
  pokemon: IInfoPokemon[];
};

const Pokedex = ({ pokemon }: Props) => {
  const list = pokemon.map((value) => (
    <Pokemon name={value.name} url={value.url} key={value.name} />
  ));
  return(
        <main>
          <section id="all">
              <section className="pokemon-all" id="pokemonlist">{list}</section>
          </section>
        </main>
        )
};

export default Pokedex;

