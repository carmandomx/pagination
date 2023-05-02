import { useEffect, useState } from "react";
import { IInfoPokemon } from "../interfaces/index";

const useFetchPokemonBySearch = () =>{
    const [selectedSearch, setSelectedSearch] = useState<string>("");
    const [pokemonBySearch, setPokemonBySearch] = useState<IInfoPokemon[]>([]);
    useEffect(()=> {
        const fn =async () => {
            const url = `https://pokeapi.co/api/v2/pokemon/${selectedSearch}`
            const req = await fetch(url);
            const data: any = await req.json();
            console.log(data)
            setPokemonBySearch([{name:data.name,
                url:url
            }]);
        }

        if(selectedSearch){
            fn().catch(console.error);
        }

    },[selectedSearch]);

    return {selectedSearch, setSelectedSearch, setPokemonBySearch, pokemonBySearch}
}

export default useFetchPokemonBySearch;