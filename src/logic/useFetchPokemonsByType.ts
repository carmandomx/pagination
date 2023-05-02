import { useEffect, useState } from "react";
import { IInfoPokemon, ITypeDetails } from "../interface";

const useFetchPokemonsByType = () => {
    // Select filter
    const [selectedType, setSelectedType] = useState<string>('');
    const [pokemonByType, setPokemonByType] = useState<IInfoPokemon[]>([]);

    useEffect(() => {
        const fn = async() => {
            const req = await fetch(selectedType);
            const data: ITypeDetails = await req.json();

            // List of pokemon filter
            const mappedData = data.pokemon.map((value) => value.pokemon);
            // Update state and limit to 9 cards
            setPokemonByType(mappedData.slice(0,9));
        }

        // Guard in falsy case
        if(selectedType) {
            fn().catch(console.error);
        }
        
    }, [selectedType])

    return {selectedType, setSelectedType, pokemonByType};
}

export default useFetchPokemonsByType;