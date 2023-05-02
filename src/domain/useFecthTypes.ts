import { useState, useEffect } from "react";
import { IIdAndName, IInfoPokemon, IlistResults } from "../interfaces";

const useFetchTypes = ()=>{
    const [types, setTypes] = useState<IInfoPokemon[]>([]);

    const fetchTypes = async ()=>{
        const req = await fetch('https://pokeapi.co/api/v2/type/')
        const dataType: IlistResults<IInfoPokemon> = await req.json();


        setTypes(dataType.results);
    }

    useEffect(()=>{
        fetchTypes().catch(console.error);
    },[])
    return {types}
}
export default useFetchTypes