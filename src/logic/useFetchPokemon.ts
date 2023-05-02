import { useEffect, useState } from "react";
import { IInfoPokemon, IlistResults } from "../interfaces";

const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
const useFetchPokemon = (
  currentPage: number,
  setLimit: (limit: number) => void
) => {
  const [pokemon, setPokemon] = useState<IInfoPokemon[]>([]); //esto es así porque es un valor que cambiará a lo largo de la ejecucion

  const fetchOnlyTenPokemon = async () => {
    const req = await fetch(URL);
    const data: IlistResults<IInfoPokemon> = await req.json();

    return setPokemon(
      data.results.slice(0 + 9 * (currentPage - 1), 9 + 9 * (currentPage - 1))
    );
  };
  useEffect(() => {
    setLimit(143);
    fetchOnlyTenPokemon().catch(console.error);
  }, [currentPage]);

  return { pokemon, fetchOnlyTenPokemon };
};

export default useFetchPokemon;
