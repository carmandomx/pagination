import React, { useState } from "react";
import useFetchPokemon from "./logic/useFetchPokemon";
import useFetchTypes from "./logic/useFetchTypes";
import useFetchPokemonsByType from "./logic/useFetchPokemonsByType";
import useFetchSearch from "./logic/useFetchSearch";
import Pokedex from "./components/Pokedex";
import SearchPokemon from "./components/SearchPokemon";
import "./App.css";
import Pagination from "./components/Pagination";

const App: React.FC = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { types } = useFetchTypes();
  const { selectedType, setSelectedType, pokemonByType } =
    useFetchPokemonsByType();
  const { pokemon } = useFetchPokemon(page);
  const { searchPokemon } = useFetchSearch(search);

  const list = types.map((value) => (
    <option key={value.name} value={value.url}>
      {value.name.toUpperCase()}
    </option>
  ));

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const handlePageChange = (pageNumber: number) => {
    if (page !== pageNumber) {
      setPage(pageNumber);
    }
  };

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className="flex">
        <SearchPokemon onButtonClick={handleSearch} />
      </div>
      <div className="type-container">
        <select
          value={selectedType}
          onChange={(ev) => {
            setSelectedType(ev.target.value);
          }}
        >
          <option value="">Select a type</option>
          {list}
        </select>
      </div>
      {selectedType ? (
        <Pokedex pokemon={pokemonByType} />
      ) : search ? (
        <Pokedex pokemon={searchPokemon} />
      ) : (
        <>
          <Pagination onPageChange={handlePageChange} />
          <Pokedex pokemon={pokemon} />
        </>
      )}
    </div>
  );
};

export default App;
