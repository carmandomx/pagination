import React, { useState } from "react";
import useFetchPokemonDetails from "../logic/useFetchPokemonDetails";
import PokemonTypes from "./PokemonTypes";
import styles from "../PokemonCard.module.css";
import pokeballImage from "../images/pokeball.png"
import shinyCharm from "../images/shinyCharm.png"


type Props = {
  name: string;
  url: string;
};

const Pokemon = ({ name, url}: Props) => {
  const { id, sprite, types, height, weight, generation, shinySprite} = useFetchPokemonDetails(url);
  const [isShiny, setIsShiny] = useState(false);

  const toggleShiny = () => {
    setIsShiny(!isShiny);
  };
  
  return (
    <div className={styles.pokemonCard}>
      <h5>{name} <span>#{id}</span> </h5> 
      <div className={styles.spriteWrapper}>
        <img src={pokeballImage} alt="Pokeball" className={styles.pokeballBackground} />
        <img src={isShiny ? shinySprite : sprite} alt={name} className={styles.pokemonSprite}/>
      </div>
      <div>
        <PokemonTypes types={types} />
        <h6>Height: {height / 10} m</h6>
        <h6>Weight: {weight / 10} kg</h6>
        <h6>Generation: {generation}</h6>
      </div>
      <div className={styles.shinyToggle}>
        <img
          src={shinyCharm}
          alt="Shiny Charm"
          onClick={toggleShiny}
          className={styles.shinyCharm}
        />
        <span className={styles.shinyText}>Shiny</span>
      </div>
    </div>
  );
};

export default Pokemon;
