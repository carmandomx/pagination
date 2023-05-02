import { useState, useEffect } from "react";
import { IInfoPokemon, IListResults } from "../interfaces";

const URL = "https://pokeapi.co/api/v2/pokemon";

const useFetchPokemon = (page: number = 1) => {
  const [pokemon, setPokemon] = useState<IInfoPokemon[]>([]);

  const fetchOnlyTenPokemons = async () => {
    const offset = 9 * (page - 1);
    const req = await fetch(`${URL}?limit=9&offset=${offset}`);
    const data: IListResults<IInfoPokemon> = await req.json();

    return setPokemon(data.results);
  };

  useEffect(() => {
    fetchOnlyTenPokemons().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return { pokemon };
};

export default useFetchPokemon;
