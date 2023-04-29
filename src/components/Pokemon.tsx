import React from "react";
import useFetchPokemonDetails from "../logic/useFetchPokemonDetails";
import { PokemonTypes } from "./PokemonTypes";

type Props = {
  name: string;
  url: string;
};

const Pokemon = ({ name, url }: Props) => {
  const { order, sprite, types } = useFetchPokemonDetails(url);
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
      </div>

    </div>
  );
};

export default Pokemon;
