import { useState , useEffect} from "react";
import { IInfoPokemon, TypeDetails } from "../interfaces";

const useFetchPokemonsByType = () =>{
    const [selectedType, setSelectedType] = useState<string>("");
    const [pokemonByType, setPokemonByType] = useState<IInfoPokemon[]>([]);

    useEffect(() =>{
        const fn = async () =>{
            const req = await fetch(selectedType);
            const data : TypeDetails = await req.json();
            const mappedData = data.pokemon.map((value) => value.pokemon);
            setPokemonByType(mappedData.slice(0,9))
        }

        if(selectedType){
            fn().catch(console.error);
        }

    },[selectedType])

    return {selectedType, setSelectedType, pokemonByType}
}

export default useFetchPokemonsByType;