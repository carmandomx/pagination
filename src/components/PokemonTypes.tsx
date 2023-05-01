import React from 'react'
import typeColors from "../logic/typeColors";
import styles from "../PokemonCard.module.css";


type Props = {
    types : string[];
}

const PokemonTypes = ({ types }: Props) => {
  return (
    <ul className={styles.typesList}>
      {types.map((value) => (
        <li
          key={value}
          className={styles.type}
          style={{
            backgroundColor: typeColors[value],
          }}
        >
          {value}
        </li>
      ))}
    </ul>
  );
};


export default PokemonTypes