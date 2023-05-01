import React, { useState } from "react";
import useFetchPokemon from "./logic/useFetchPokemon";
import Pokedex from "./components/Pokedex";
import useFetchTypes from "./logic/useFetchTypes";
import useFetchPokemonsByType from "./logic/useFetchPokemonsByType";
import { SearchPokemon } from "./components/SearchPokemon";
import "./App.css";

function App() {

  // Load pokemons
  const { pokemon } = useFetchPokemon();
  // Load types for select
  const { types } = useFetchTypes();
  // Filter for type
  const { selectedType, setSelectedType, pokemonByType } = useFetchPokemonsByType();

  // Drop down options
  const list = types.map((value) => <option key={value.name} value={value.url}>{value.name.toUpperCase()}</option>);


  return (
    <div className="App">
      {/* Select type */}
      <select value={selectedType} onChange={(ev) => {
        setSelectedType(ev.target.value);
      }}>
        <option value=''>Select a type</option>
        {list}
      </select>

      {/* Search box */}
      <SearchPokemon />

      {/* Renderizado condicional */}
      { !selectedType
        ? <Pokedex pokemon={pokemon} /> 
        : <Pokedex pokemon={pokemonByType} />
      }

    </div>
  );
}

export default App;
