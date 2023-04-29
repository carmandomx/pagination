import { useEffect, useState } from "react";
import { IPokemonDetails } from "../interfaces/interfaces";

const useFetchPokemonDetails = (url:string) =>{
    const [order,setOrder] = useState(0); 
    const [sprite, setSprite] = useState("");
    const [types, setTypes] = useState<string[]>([]);

    useEffect(() =>{

        const fn = async () => {
            const req = await fetch(url);
            const data: IPokemonDetails = await req.json()

            setOrder(data.order)
            setSprite(data.sprites.front_default);
            const originalData = data.types;
            const newData = originalData.map(({type}) => type.name);
            setTypes(newData);

        }
        fn().catch(console.error);

    },[url]);
    
    return {order,sprite,types};
}

export default useFetchPokemonDetails;