import React from "react";
import useFetchPokemonDetails from "../logic/useFetchPokemonDetails";
import PokemonTypes from "./PokemonTypes";

type Props = {
  name: string;
  url: string;
};

const Pokemon = ({ name, url}: Props) => {
  const {order, sprite, types} = useFetchPokemonDetails(url);
  return (
    <div>
      <h5>{name}</h5>
      <div>
        <PokemonTypes types={types}/>
        <h6>No.{order}</h6>
        <img src={sprite} alt={name} />
      </div>
    </div>
  );
};

export default Pokemon;
