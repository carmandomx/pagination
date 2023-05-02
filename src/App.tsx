import React, { useEffect, useState } from "react";
import "./App.css";
import useFetchPokemon from "./logic/useFetchPokemon";
import Pokedex from "./components/Pokedex";
import useFetchTypes from "./logic/useFetchTypes";
import Pagination from "./components/Pagination";
import usePagination from "./logic/usePagination";
import useFetchPokemonsByType from "./logic/useFetchPokemonByType";

function App() {
  const { currentPage, setCurrentPage } =
    usePagination(); /*counter for the pages */
  const { types } = useFetchTypes();
  const { selectedType, setSelectedType, pokemonByType, limit, setLimit } =
    useFetchPokemonsByType(currentPage);
  const { pokemon } = useFetchPokemon(currentPage, setLimit);

  const list = types.map((value) => (
    <option key={value.name} value={value.url}>
      {value.name.toUpperCase()}
    </option>
  ));

  return (
    <div className="App">
      <select
        className="select"
        value={selectedType}
        onChange={(ev) => {
          setCurrentPage(1);
          setSelectedType(ev.target.value);
        }}
      >
        <option value={""}>Select a type</option>
        {list}
      </select>
      {!selectedType ? (
        <Pokedex pokemon={pokemon} />
      ) : (
        <Pokedex pokemon={pokemonByType} />
      )}
      <Pagination
        limit={limit}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      ></Pagination>
    </div>
  );
}

export default App;
