import React, { useState } from "react";
import useFetchPokemon from "./logic/useFetchPokemon";
import useFetchTypes from "./logic/useFetchTypes";
import Pokedex from "./components/Pokedex";
import Pokemon from "./components/Pokemon";
import Pagination from "./components/Pagination";
import "./App.css";
import logo from "./images/pokedexlogo.png";
import useFetchPokemonByTypes from "./logic/useFetchPokemonbyType";
import { IPokemonTypesFetch } from "./interfaces";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const { pokemon, totalPages } = useFetchPokemon(currentPage);
  const { types } = useFetchTypes();
  const { selectedType, setSelectedType, pokemonByType } =
    useFetchPokemonByTypes();
  const [searchTerm, setSearchTerm] = useState("");

  const listOfTypes = types.map((value) => (
    <option key={value.name} value={value.url}>
      {value.name[0].toUpperCase() + value.name.slice(1)}
    </option>
  ));

  const filteredPokemon = pokemon.filter(
    (poke) =>
      poke.name.includes(searchTerm.toLowerCase()) ||
      poke.id?.toString().includes(searchTerm)
  );

  return (
    <div className="App">
      <div className="header">
        <img
          src={logo}
          alt="Pokedex Logo"
          className="logo"
          onClick={() => window.location.reload()}
        />
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <div className="selectDD">
        <select
          className="select"
          value={selectedType}
          onChange={(ev) => setSelectedType(ev.target.value)}
        >
          <option value={""}>Select a type</option>
          {listOfTypes}
        </select>
      </div>
      <div>
        <Pokedex pokemon={selectedType ? pokemonByType : filteredPokemon} />
      </div>

      <div className="pagination">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default App;
