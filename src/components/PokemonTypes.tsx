import React from "react";

type Props = {
  types: string[];
};

const PokemonTypes = ({ types }: Props) => {
  return (
    <ul
      className="types"
      style={{
        margin: "8px",
        padding: 0,
        listStyleType: "none",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {types.map((value) => (
        <li className={`type-${value}`} key={value}>
          {value}
        </li>
      ))}
    </ul>
  );
};

export default PokemonTypes;
