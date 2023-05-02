import React from "react";
import useFetchPokemonDetails from "../logic/useFetchPokemonDetails";
import { PokemonTypes } from "./PokemonTypes";

type Props = {
  name: string;
  url: string;
};

const Pokemon = ({ name, url }: Props) => {
  const { id, sprite, types, height, weight, gen } = useFetchPokemonDetails(url);
  const convHeight = height / 10;
  const convWeight = weight / 10;

  return (
    // Pokemon Card
    <div className="div-card">
      {/* Pokemon image */}
      <img className="sprite" alt={name} src={sprite} />

      {/* Pokemon Name */}
      <h5>{name.toUpperCase()}</h5>

      <div>
        {/* Pokemon number */}
        <h6>No. {id}</h6>
        {/* Type of Pokemon */}
        <PokemonTypes types={types} />
        <br />
        <div className="pokeDetails">
          <h6>Height: {convHeight} m</h6>
          <h6>Weight: {convWeight} kg</h6>
          <h6>Generation: {gen} </h6>
        </div>
      </div>

    </div>
  );
};

export default Pokemon;
