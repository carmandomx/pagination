import React from "react";
import Pokemon from "./Pokemon";
import { IInfoPokemon } from "../interface";

type Props = {
  pokemon: IInfoPokemon[];
};

const Pokedex = ({ pokemon }: Props) => {
  const list = pokemon.map((value) => (
    <Pokemon name={value.name} url={value.url} key={value.name} />
  ));
  return <div className="Pokedex">{list}</div>;
};

export default Pokedex;
