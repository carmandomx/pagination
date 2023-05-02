import React, { useState } from "react";
import styles from "./../styles/Pokemon.module.css";
import useFetchPokemonDetails from "../logic/useFetchPokemonDetails";
import PokemonTypes from "./PokemonTypes";

type Props = {
  name: string;
  url: string;
};

const Pokemon = ({ name, url }: Props) => {
  const [checked, setChecked] = useState(false);
  const { id, height, weight, generation, sprite, shiny, types } =
    useFetchPokemonDetails(url);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={styles.card}>
      <h5 className={`${styles["margin-top-s"]} ${styles["margin-bot-s"]}`}>
        No. {id}
      </h5>
      <div>
        <h5 className={`${styles["margin-top"]} ${styles["margin-bottom"]}`}>
          {name.toUpperCase()}
        </h5>
        <h6 className={`${styles["margin-top"]} ${styles["margin-bottom"]}`}>
          Height: {height}m.
        </h6>
        <h6 className={`${styles["margin-top"]} ${styles["margin-bottom"]}`}>
          Weight: {weight}gr.
        </h6>
        <h6 className={`${styles["margin-top"]} ${styles["margin-bottom"]}`}>
          {generation}
        </h6>
        <PokemonTypes types={types} />
        <img
          className={styles["margin-minus"]}
          alt={name}
          src={checked ? shiny : sprite}
        />
        <div>
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            Shiny
          </label>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
