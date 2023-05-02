import React, { useEffect, useState } from "react";
import useFetchPokemon from "./logic/useFetchPokemon";
import Pokedex from "./components/Pokedex";
import useFetchTypes from "./logic/useFetchTypes";
import useFetchPokemonsByType from "./logic/useFetchPokemonsByType";
import useSearchBar from "./logic/useSearchBar";
import { Banner } from "./components/Banner";
import "./App.css";
import { IInfoPokemon } from "./interface";

function App() {

  const [pokemonList, setPokemonList] = useState<IInfoPokemon[]>([]);
  // Load pokemons
  const { pokemon, handleFetch, prev, next, count } = useFetchPokemon();
  // Load types for select
  const { types } = useFetchTypes();
  // Filter for type
  const { selectedType, setSelectedType, pokemonByType } = useFetchPokemonsByType();
  // Drop down options
  const list = types.map((value) => <option key={value.name} value={value.url}>{value.name.toUpperCase()}</option>);
  // SearchBar
  const [search, setSearch] = useState('');
  const { searchedBar } = useSearchBar(search);

  useEffect(() => {
    if(searchedBar.length === 0) {
      return setPokemonList(pokemon);
    }
    setPokemonList(searchedBar);
  }, [searchedBar, pokemon])

  useEffect(() => {
    setPokemonList(pokemon);
  }, [pokemon])
  
  let hanldePageChange = (url:string) => {
    handleFetch(url);
  }

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

      {/* Conditional render for cards */}
      {
        !selectedType 
          ? <Pokedex pokemon={pokemonList} />
          : <Pokedex pokemon={pokemonByType} />
      }

      {/* Pagination */}
      <h3>{count}</h3>

      {
        prev && !search && <button onClick={() => hanldePageChange(prev as string)}>Prev</button>
      }
      {
        next && !search && <button onClick={() => hanldePageChange(next as string)}>Next</button>
      }

    </div>
  );
}

export default App;
