import { useEffect, useState } from "react";
import { IPokemonDetails } from "../interfaces";

const useFetchPokemonDetails = (url: string) => {
  const [id, setId] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [generation, setGeneration] = useState("");
  const [sprite, setSprite] = useState("");
  const [shiny, setShiny] = useState("");
  const [types, setTypes] = useState<string[]>([]);

  useEffect(() => {
    const fn = async () => {
      const req = await fetch(url);
      const data: IPokemonDetails = await req.json();

      setId(data.id);
      setHeight(data.height);
      setWeight(data.weight);
      setSprite(data.sprites.front_default);
      setShiny(data.sprites.front_shiny);

      const gen = async () => {
        switch (true) {
          case id > 0 && id < 152:
            return "1st Generation";
          case id > 151 && id < 252:
            return "2nd Generation";
          case id > 251 && id < 387:
            return "3rd Generation";
          case id > 386 && id < 494:
            return "4th Generation";
          case id > 493 && id < 650:
            return "5th Generation";
          case id > 649 && id < 722:
            return "6th Generation";
          case id > 721 && id < 810:
            return "7th Generation";
          case id > 809 && id < 903:
            return "8th Generation";
          default:
            return "No Generation available";
        }
      };
      setGeneration(await gen());

      const originalData = data.types;
      const newData = originalData.map(({ type }) => type.name);
      setTypes(newData);
    };

    fn().catch(console.error);
  }, [id, url]);

  return { id, height, weight, generation, sprite, shiny, types };
};

export default useFetchPokemonDetails;
