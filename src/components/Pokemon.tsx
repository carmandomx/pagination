import React from "react";
import useFetchPokemonDetails from "../logic/useFetchPokemonDetails";
import { PokemonTypes } from "./PokemonTypes";

type Props = {
  name: string;
  url: string;
};

const Pokemon = ({ name, url }: Props) => {
  const { order, sprite, types, height, weight, gen } = useFetchPokemonDetails(url);
  
  return (
    // Pokemon Card
    <div className="div-card">
      {/* Pokemon image */}
      <img className="sprite" alt={name} src={sprite} />

      {/* Pokemon Name */}
      <h5>{name.toUpperCase()}</h5>

      <div>
        {/* Pokemon number */}
        <h6>No. {order}</h6>
        {/* Type of Pokemon */}
        <PokemonTypes types={types} />
        <h6>Height: {height / 10} m</h6>
        <h6>Weight: {weight / 10} kg</h6>
        <h6>Generation: {gen} </h6>
      </div>

    </div>
  );
};

export default Pokemon;
