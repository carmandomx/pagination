import { useEffect, useState } from "react";
import { IInfoPokemon, IListResults } from "../interface";

const URL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9';

const useFetchPokemon = () => {
    const [pokemon, setPokemon] = useState<IInfoPokemon[]>([]);

    // Pagination
    const [prev, setPrev] = useState<null | string>(null);
    const [next, setNext] = useState<null | string>('');
    const [count, setCount] = useState<number>(0);

    const handleFetch = (url: string) => {
        fetchOnlyTenPokemons(url);
    }

    const fetchOnlyTenPokemons = async (url = URL) => {
        const req = await fetch(url);
        const data: IListResults<IInfoPokemon>  = await req.json();

        setPrev(data.previous);
        setNext(data.next);
        setCount(data.count);
        return setPokemon(data.results)    
    }

    useEffect(() => {
        fetchOnlyTenPokemons().catch(console.error);
      }, []);


    return { pokemon, prev, next, count, fetchOnlyTenPokemons, handleFetch }
}

export default useFetchPokemon;