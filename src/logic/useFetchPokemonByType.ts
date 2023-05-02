import React, { useEffect, useState } from 'react'
import { IInfoPokemon, ITypeDetails } from '../interfaces';

const useFetchPokemonsByType = (currentPage:number) => {
    const [selectedType, setSelectedType] = useState<string>("");
    const [pokemonByType, setPokemonByType] = useState<IInfoPokemon[]>([])
    const [limit, setLimit] = useState<number>(0)
    

    useEffect(()=>{
        const fn = async () => {
            const req = await fetch (selectedType)
            const data: ITypeDetails = await req.json()
            const mappedData = data.pokemon.map((value) => value.pokemon)
            
            
            setLimit(Math.floor(mappedData.length/9)+1)
            setPokemonByType(mappedData.slice(0+9*(currentPage-1),9+9*(currentPage-1)))
        }

        if (selectedType){
            fn().catch(console.error)
        }
    },[selectedType,currentPage])



  return {selectedType,setSelectedType, pokemonByType, limit, setLimit}
}

export default useFetchPokemonsByType