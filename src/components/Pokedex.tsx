import React from "react";
import { IInfoPokemon } from "../interfaces";
import Pokemon from "./Pokemon";

type Props = {
  pokemon: IInfoPokemon[];
};

const Pokedex = ({ pokemon }: Props) => {
  const List = pokemon.map((value) => (
    <Pokemon name={value.name} url={value.url} key={value.name} />
  ));
  return <div className="Pokedex">{List}</div>;
};

export default Pokedex;
