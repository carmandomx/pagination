import { useEffect, useState } from "react";
import { IPokemonDetails } from "../interfaces/interfaces";

const useFetchPokemonDetails = (url:string) =>{
    const [order,setOrder] = useState(0); 
    const [sprite, setSprite] = useState("");
    const [types, setTypes] = useState<string[]>([]);
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [generation, setGeneration] = useState(0);

    useEffect(() =>{

        const fn = async () => {
            const req = await fetch(url);
            const data: IPokemonDetails = await req.json()

            setOrder(data.order)
            setSprite(data.sprites.front_default);
            const originalData = data.types;
            const newData = originalData.map(({type}) => type.name);
            setTypes(newData);
            setHeight(data.height);
            setWeight(data.weight);

            const speciesReq = await fetch(data.species.url);
            const speciesData = await speciesReq.json();
            const generationReq = await fetch(speciesData.generation.url);
            const generationData = await generationReq.json();
            setGeneration(generationData.id);

        }
        fn().catch(console.error);

    },[url]);
    
    return { order, sprite, types, height, weight, generation };
}

export default useFetchPokemonDetails;