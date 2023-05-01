import { useEffect, useState } from "react";
import { IPokemonDetails } from "../interface";

const useFetchPokemonDetails = (url: string) => {
    const [order, setOrder] = useState(0);
    const [sprite, setSprite] = useState("");
    const [types, setTypes] = useState<string[]>([]);
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [gen, setGen] = useState(0);

    useEffect(() => {

        const fn = async () => {
            const req = await fetch(url);
            const data: IPokemonDetails = await req.json();

            setOrder(data.order);
            setSprite(data.sprites.front_default);
            const originalData = data.types;
            const newData = originalData.map(({ type }) => type.name);
            setTypes(newData);
            setHeight(data.height);
            setWeight(data.weight);

            // Gen
            const pokeInfoReq = await fetch(data.species.url);
            const speciesData = await pokeInfoReq.json();
            const genReq = await fetch(speciesData.generation.url);
            const genData = await genReq.json();
            setGen(genData.id);
        }
        fn().catch(console.error);

    }, [url])

    return { order, sprite, types, height, weight, gen }
}

export default useFetchPokemonDetails;