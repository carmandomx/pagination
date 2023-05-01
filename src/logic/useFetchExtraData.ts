import { useEffect, useState } from "react";
import { IExtraData } from "../interface";
import useFetchPokemon from "./useFetchPokemon";


let {pokemon} = useFetchPokemon();
const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

const useFetchExtraData = () => {
    const [extraData, setExtraData] = useState<IExtraData[]>([]);

    const fetchExtraData = async () => {
        const req = await fetch(URL);
        const {weight}  = await req.json();

        return setExtraData(weight.slice(0,18))    
    }

    useEffect(() => {
        fetchExtraData().catch(console.error);
      }, []);


    return { extraData, fetchExtraData }
}

export default useFetchExtraData;