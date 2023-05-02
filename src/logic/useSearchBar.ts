import { useState, useEffect } from "react";
import { IInfoPokemon } from "../interface";

const useSearchBar = (search: string) => {
  const [searchedBar, setSearchedBar] = useState<IInfoPokemon[]>([]);

  useEffect(() => {
    const pokeSearch = async () => {
      if (!search) {
        setSearchedBar([]);
        return;
      }
      
      // Search by name or id number
      const url = isNaN(Number(search))
        ? `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`
        : `https://pokeapi.co/api/v2/pokemon/${Number(search)}`;

      try {
        const req = await fetch(url);
        const data: IInfoPokemon = await req.json();

        setSearchedBar([{ name: data.name, url: url }]);
      } 
      catch (error) {
        setSearchedBar([]);
      }
    };

    pokeSearch();
  }, [search]);

  return { searchedBar };
};

export default useSearchBar;