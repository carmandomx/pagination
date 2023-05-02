import React from "react";
import useFetchPokemonDetails from "../logic/useFetchPokemonDetails";
import PokemonTypes from "./PokemonTypes";
import useFetchGeneration from "../logic/useFetchGenerations";

type Props = {
  name: string;
  url: string;
};

const Pokemon = ({ name, url }: Props) => {
  const { order, sprite, types, height, weight } = useFetchPokemonDetails(url);

  const { gen } = useFetchGeneration(order);

  return (
    <div className={`${types[0]}`}>
      <div className="head">
        <div className="pokedex-number">No. {order}</div>
        <div className="generation">
          Generation {gen.slice(11).toUpperCase()}
        </div>
      </div>
      <div className="pokeball"></div>
      <img className="pokemon-image" alt={name} src={sprite} />
      <div className="card-content">
        <h1 className="name">{name[0].toUpperCase() + name.slice(1)}</h1>
        <PokemonTypes types={types} />
        <p className="card-info">Weight: {weight / 10} kg</p>
        <p className="card-info">Height: {height / 10} m</p>
      </div>
    </div>
  );
};

export default Pokemon;
