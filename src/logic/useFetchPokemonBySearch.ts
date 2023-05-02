import { useState, useEffect } from "react";
import { IInfoPokemon } from "./../interfaces/index";

const useFetchSearch = (search: string) => {
  const [searchPokemon, setSearchPokemon] = useState<IInfoPokemon[]>([]);
  const URL = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    const searchedPokemon = async () => {
      if (search.length === 0) {
        setSearchPokemon([]);
        return;
      }
      const url = `${URL}${search}`;
      const req = await fetch(url);
      const data: IInfoPokemon = await req.json();
      setSearchPokemon([{ name: data.name, url: url }]);
    };

    searchedPokemon().catch(console.error);
  }, [search]);

  return { searchPokemon };
};

export default useFetchSearch;