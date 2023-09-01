import React from "react";
import useFetchPokemon from "./domain/useFetchPokemon";
import useFetchPokemonByType from "./domain/useFetchPokemonByType";
import Pokedex from "./components/Pokedex";
import "./App.css";
import useFetchTypes from "./domain/useFecthTypes";
import useFetchPokemonBySearch from "./domain/useFetchPokemonBySearch";
import pokelogo from "./media/pokelogo.png";

function App() {
  const { selectedType, setSelectedType, pokemonByType } =
    useFetchPokemonByType();
  const { selectedSearch, setSelectedSearch, pokemonBySearch } =
    useFetchPokemonBySearch();
  const { pokemon, currentPage, setCurrentPage } = useFetchPokemon();
  const { types } = useFetchTypes();
  const list = types.map((value) => (
    <option key={value.name} value={value.url}>
      {value.name.toUpperCase()}
    </option>
  ));
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleStart = () => {
    setCurrentPage(1);
  };
  const handleEnd = () => {
    setCurrentPage(100);
  };

  return (
    <>
      <header>
        <nav className="nav">
          <img src={pokelogo} alt="Pokedex Logo" />
          <ul className="nav-list">
            <li>
              <select
                value={selectedType}
                onChange={(ev) => {
                  setSelectedType(ev.target.value);
                }}
              >
                <option value="">Select a type!!</option>
                {list}
              </select>
            </li>
            <li>
              <input
                type="text"
                value={selectedSearch}
                onChange={(ev) => {
                  setSelectedSearch(ev.target.value);
                }}
              />
            </li>
          </ul>
        </nav>
      </header>
      {!selectedSearch && !selectedType ? (
        <Pokedex pokemon={pokemon} />
      ) : selectedSearch && !selectedType ? (
        <Pokedex pokemon={pokemonBySearch} />
      ) : (
        <Pokedex pokemon={pokemonByType} />
      )}
      {!selectedSearch && !selectedType ? (
        <footer>
          <div className="btn-content">
            <button
              className="btn-foot"
              onClick={handleStart}
              disabled={currentPage === 1}
            >
              Back to start
            </button>
            <button
              className="btn-foot"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="btn-foot"
              onClick={handleNextPage}
              disabled={currentPage === 100}
            >
              Next
            </button>
            <button
              className="btn-foot"
              onClick={handleEnd}
              disabled={currentPage === 100}
            >
              Last page
            </button>
          </div>
        </footer>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default App;
