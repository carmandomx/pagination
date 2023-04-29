import { useEffect, useState } from "react";
import { IInfoPokemon, ITypeDetails } from "../interface";

const useFetchPokemonsByType = () => {
    // Filtro por select
    const [selectedType, setSelectedType] = useState<string>('');
    const [pokemonByType, setPokemonByType] = useState<IInfoPokemon[]>([]);

    useEffect(() => {
        const fn = async() => {
            const req = await fetch(selectedType);
            const data: ITypeDetails = await req.json();

            // Lista de pokemon filtrados
            const mappedData = data.pokemon.map((value) => value.pokemon);
            // Actualizar el estado y limitar a 10 pokemon
            setPokemonByType(mappedData.slice(0,18));
        }

        // Guardia en caso de que sea falsy
        if(selectedType) {
            fn().catch(console.error);
        }
        
    }, [selectedType])

    return {selectedType, setSelectedType, pokemonByType};
}

export default useFetchPokemonsByType;