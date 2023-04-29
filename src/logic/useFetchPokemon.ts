import { useEffect, useState} from "react";
import { IInfoPokemon, IListResults} from "../interfaces/interfaces";

const URL = "https://pokeapi.co/api/v2/pokemon";

const useFetchPokemon = () => {
  const [pokemon, setPokemon] = useState<IInfoPokemon[]>([]);
  
  const fetchOnlyNinePokemon = async () => {
    const req = await fetch(URL);
    const data: IListResults<IInfoPokemon> = await req.json();

    return setPokemon(data.results.slice(0, 9));
  }

  useEffect(()=>{
    fetchOnlyNinePokemon().catch(console.error);
  },[])
  return { pokemon, fetchOnlyNinePokemon };
};

export default useFetchPokemon;