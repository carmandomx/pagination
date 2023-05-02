import { useState , useEffect } from "react";
import { IPokemonDetails } from "../interfaces";

const useFetchPokemonDetails = (url: string)=> {
    //lugar en donde guardar los datos
    //const [state, setState] = useState(null);
    const [order, setOrder] = useState(0);
    const [sprite, setSprite] = useState("");
    const [types, setTypes] = useState<string[]>([]);
    const [height,setHeight] = useState(0);
    const [weight,setWeight] = useState(0);
    const [generation, setGeneration] = useState(0);
   
    //necesito hacer una peticion por cada uno de los elementos de la lista
    useEffect(() => {
        const fn = async () => {
            const req = await fetch(url);
            const data : IPokemonDetails = await req.json();


            //setState(data);
            setOrder(data.order);
            setSprite(data.sprites.front_default);
            //transformar un arreglo de poketypes a pokeStrings
            const originalData = data.types;
            const newData = originalData.map(({type}) =>  type.name);
            setTypes(newData);
            setHeight(data.height);
            setWeight(data.weight);

            const reqSpecies = await fetch(data.species.url);
            const dataSpecies = await reqSpecies.json();
            const reqGeneration = await fetch(dataSpecies.generation.url);
            const dataGen = await reqGeneration.json();
            setGeneration(dataGen.id);

        }
        fn().catch(console.error);
        
        }, [url]);
    

    
  return {order , sprite , types, height , weight , generation} ;
}

export default useFetchPokemonDetails;