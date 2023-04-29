import React from "react";
import useFetchPokemon from "./logic/useFetchPokemon";
import Pokedex from "./components/Pokedex";
import useFetchTypes from "./logic/useFetchTypes";
import "./App.css";
import useFetchPokemonByType from "./logic/useFetchPokemonByType";

const App = () => {
  const {pokemon} = useFetchPokemon();
  const{types} = useFetchTypes();
  const {selectedType, setSelectedType, pokemonByType} = useFetchPokemonByType();

  const list = types.map((value)=> <option key={value.name} value={value.url}>{value.name.toUpperCase()}</option>)

  return (
  <div className="App">
    <select value={selectedType} onChange={(e)=> setSelectedType(e.target.value)} >
      <option value="">Select a type</option>
      {list}
    </select>
    {selectedType ? (<Pokedex pokemon={pokemonByType}/>) : ( <Pokedex pokemon={pokemon}/>)}
  </div>
  );
};

export default App;