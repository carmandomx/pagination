import { useState, useEffect } from "react";
import { IInfoPokemon, IlistResults } from "../interfaces";

const useFetchPokemon = () =>{
    const [pokemon, setPokemon] = useState<IInfoPokemon[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    
    const fetchOnlyNinePokemons = async () =>{
        const URL = `https://pokeapi.co/api/v2/pokemon?limit=898&offset=${(currentPage - 1) * 9}.`;
        const req = await fetch(URL);
        const data:IlistResults<IInfoPokemon> = await req.json();

        return setPokemon(data.results.slice(0,9))
    }
    useEffect(()=>{
        fetchOnlyNinePokemons().catch(console.error);
      },[currentPage])

    return { pokemon, fetchOnlyNinePokemons, currentPage, setCurrentPage}
}

export default useFetchPokemon;