import React from "react";
import useFetchPokemonDetails from "../logic/useFetchPokemonDetails";
import PokemonTypes from "./PokemonTypes";

type Props = {
  name: string;
  url: string;
};

const Pokemon = ({ name, url }: Props) => {
  const { order, sprite, types, height, weight, generation } =
    useFetchPokemonDetails(url);

   
  return (
    <>
      <div className="card">
        <h5
          style={{
            marginBottom: 0,
            textAlign: "center",
          }}
        >
          {name}
        </h5>
        <div>
          <div className="types">
            <PokemonTypes types={types} />
          </div>
          <h6
            style={{
              marginBottom: 0,
              textAlign: "center",
            }}
          >
            {" "}
            No. {order}{" "}
          </h6>
          <div >
            <img alt={name} src={sprite}/>
          </div>

          <p style={{ fontSize: 20, textAlign: "center" }}>Height: {height}</p>
          <p style={{ fontSize: 20, textAlign: "center" }}>Weight: {weight}</p>
          <p style={{ fontSize: 20, textAlign: "center" }}>
            Generation: {generation}
          </p>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
