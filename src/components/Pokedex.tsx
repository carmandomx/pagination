import React from "react";
import styles from "./../styles/Pokedex.module.css";
import { IInfoPokemon } from "../interfaces";
import Pokemon from "./Pokemon";

type Props = {
  pokemon: IInfoPokemon[];
};

const Pokedex = ({ pokemon }: Props) => {
  const list = pokemon.map((value) => (
    <Pokemon name={value.name} url={value.url} key={value.name} />
  ));
  return <div className={styles.pokedex}>{list}</div>;
};

export default Pokedex;
