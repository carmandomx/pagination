import React, { useState } from "react";
import useFetchPokemon from "./logic/useFetchPokemon";
import Pokedex from "./components/Pokedex";
import useFetchTypes from "./logic/useFetchTypes";
import useFetchPokemonsByType from "./logic/useFetchPokemonsByType";
import { SearchPokemon } from "./components/SearchPokemon";
import "./App.css";
import useSearchBar from "./logic/useSearchBar";
import { Banner } from "./components/Banner";

function App() {

  // Load pokemons
  const { pokemon } = useFetchPokemon();
  // Load types for select
  const { types } = useFetchTypes();
  // Filter for type
  const { selectedType, setSelectedType, pokemonByType } = useFetchPokemonsByType();
  // Drop down options
  const list = types.map((value) => <option key={value.name} value={value.url}>{value.name.toUpperCase()}</option>);
  // SearchBar
  const [search, setSearch] = useState('');
  const { searchedBar } = useSearchBar(search);

  return (
    <div className="App">
      
      <Banner />

      {/* Select type */}
      <div className="custom-select">
        <select value={selectedType} onChange={(ev) => {
          setSelectedType(ev.target.value);
        }}>
          <option value=''>Select a type</option>
          {list}
        </select>
      </div>

      <hr />

      {/* Search box */}
      <input
        className={'Bar'}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Poke Search"
      />

      { selectedType 
        ? (<Pokedex pokemon={pokemonByType}/>) 
        : search 
          ? (<Pokedex pokemon={searchedBar} />) 
          : ( <Pokedex pokemon={pokemon} /> )
      }

      {/* Conditional Render */}
      { !search && !selectedType 
        ? <Pokedex pokemon={pokemon} /> 
        : <Pokedex pokemon={pokemonByType} />
      }

    </div>
  );
}

export default App;
