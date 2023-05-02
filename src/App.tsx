import { useState } from "react";
import useFetchPokemon from "./logic/useFetchPokemo";
import "./App.css";
import Pokedex from "./components/Pokedex";
import useFetchTypes from "./logic/useFetchTypes";
import useFetchPokemonsByType from "./logic/useFetchPokemonsByType";
import useFetchPokemonBySearch from "./logic/useFetchPokemonBySearch";
import SearchPokemon from "./components/SearchBar";
import Pagination from "./components/Pagination";

function App() {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const { searchPokemon } = useFetchPokemonBySearch(searchValue);
  const { pokemon } = useFetchPokemon(page);
  const { types } = useFetchTypes();
  const { selectedType, setSelectedType, pokemonByType } =
    useFetchPokemonsByType();
  const list = types.map((value) => (
    <option key={value.name} value={value.url}>
      {value.name.toUpperCase()}
    </option>
  ));

  const handleSearchChange = (search: string) => {
    setSearchValue(search);
  };
  const handlePageChange = (pageNumber: number) => {
    if (page !== pageNumber) {
      setPage(pageNumber);
    }
  };

  return (
    <div className="App-header">
      <header>
        <select
          value={selectedType}
          onChange={(ev) => setSelectedType(ev.target.value)}
        >
          <option> Select a type</option>
          {list}
        </select>

        <SearchPokemon onButtonClick={handleSearchChange} />
      </header>

      {!selectedType ? (
        searchValue ? (
          <Pokedex pokemon={searchPokemon} />
        ) : (
          <>
          <Pokedex pokemon={pokemon} />
          <Pagination onPageChange={handlePageChange} />
          
        </>
        )
      ) : (
        <Pokedex pokemon={pokemonByType} />
      )}

    </div>
  );
}

export default App;
