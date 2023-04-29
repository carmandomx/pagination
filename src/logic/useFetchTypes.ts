import { useEffect, useState } from 'react'
import { IInfoPokemon, IListResults } from '../interfaces/interfaces';

const useFetchTypes = () => {
    const [types, setTypes] = useState<IInfoPokemon[]>([]);

    const fetchType =async () => {
        const req = await fetch("https://pokeapi.co/api/v2/type/");
        const data : IListResults<IInfoPokemon>= await req.json();
        setTypes(data.results);
    }

    useEffect(()=>{
        fetchType().catch(console.error)
    },[]);

    return {types};
}

export default useFetchTypes