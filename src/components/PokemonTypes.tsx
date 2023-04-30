import React from 'react'
import typeColors from "../logic/typeColors";


type Props = {
    types : string[];
}

const PokemonTypes = ({ types }: Props) => {
  return (
    <ul>
      {types.map((value) => (
        <li
          key={value}
          style={{
            backgroundColor: typeColors[value],
            borderRadius: "5px",
            padding: "2px 5px",
          }}
        >
          {value}
        </li>
      ))}
    </ul>
  );
};


export default PokemonTypes