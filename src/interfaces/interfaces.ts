export interface IInfoPokemon {
  name: string;
  url: string;
}

export interface IListResults<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

interface IPokeType{
slot : number;
type: IInfoPokemon;
}

export interface IPokemonDetails {
id: number;
height: number;
weight: number;
sprites: {
  front_default: string;
  front_shiny:string;
};
types: IPokeType[];
species: {
  url: string;
};
}


export interface ITypeDetails{
pokemon : {
  pokemon : IInfoPokemon
  slot : number
}[]
}