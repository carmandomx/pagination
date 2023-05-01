import { useState, useEffect } from "react";
import { IInfoPokemon } from "../interfaces/interfaces";

const useSearchPokemon = (search: string) => {
  const [searchedPokemon, setSearchedPokemon] = useState<IInfoPokemon[]>([]);

  useEffect(() => {
    const searchPokemon = async () => {
      if (search.length === 0) {
        setSearchedPokemon([]);
        return;
      }
      const url = isNaN(Number(search))
        ? `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`
        : `https://pokeapi.co/api/v2/pokemon/${Number(search)}`;

      try {
        const req = await fetch(url);
        const data: IInfoPokemon = await req.json();

        setSearchedPokemon([{ name: data.name, url: url }]);
      } catch (error) {
        setSearchedPokemon([]);
      }
    };

    searchPokemon();
  }, [search]);

  return { searchedPokemon };
};

export default useSearchPokemon;
