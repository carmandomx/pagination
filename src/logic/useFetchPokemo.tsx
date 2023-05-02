import { useState , useEffect}  from "react";
import { IInfoPokemon } from "../interfaces";
import { IListResults } from "../interfaces";


const useFetchPokemon = (page:number=1) =>{
    const URL = 'https://pokeapi.co/api/v2/pokemon';
    //DE ESTA MANERA ES SOLO PARA UN POKEMON
    //const [pokemon, setPokemon] = useState<IInfoPokemon>({name: '' , url: ''})

    //para varios pokemones
    const [pokemon, setPokemon] = useState<IInfoPokemon[]>([]);

    const fetchOnlyTenPokemons = async () =>{
        const size=9*(page-1);
       const req = await fetch(`${URL}?limit=9&offset=${size}`);
       const data: IListResults<IInfoPokemon> = await req.json();

       return setPokemon(data.results);
    }

    useEffect(() => {
        fetchOnlyTenPokemons().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page]);


    return {pokemon, fetchOnlyTenPokemons};
}

export default useFetchPokemon;