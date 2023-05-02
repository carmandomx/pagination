import React from "react";
import styles from "./../styles/PokemonTypes.module.css";

type Props = {
  types: string[];
};

const PokemonTypes = ({ types }: Props) => {
  return (
    <ul
      className={`${styles["card"]} ${styles["margin-bot"]} ${styles["margin-top"]}`}
    >
      {types.map((value, index) => (
        <li className={styles[value]} key={value}>
          {index === types.length - 1 ? value : value + "/"}
        </li>
      ))}
    </ul>
  );
};

export default PokemonTypes;
