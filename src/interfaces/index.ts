//import { InvalidatedProjectKind, NumberLiteralType } from "typescript";

export interface IInfoPokemon {
    name: string;
    url: string;
}

export interface IListResults<T> {
    count: number;
    next: string;
    previous: null;
    results: T[]
}
interface IpokeType{
    slot : number;
    type:{
        name: string;
        url : string;  
    }
    
}
export interface IPokemonDetails<> {
    order:number;
    sprites : {
        front_default : string;
    }
    types: IpokeType[];
    height: number;
    weight: number;
    species: {
        url: string;
      };
}


export interface IIAndName{
    id:number;
    string:string;
}

export interface TypeDetails {
    pokemon:{
        pokemon:IInfoPokemon,
        slot:number
    }[]
}

interface IPokemonType {
    type: {
      name: string;
    };
  }
  
 export interface IPokeDetails {
    name: string;
    order: number;
    sprite: {
      front_default: string;
    };
    types: IPokemonType[];
    height: number;
    weight: number;
    generation: {
      name: string;
    };
  }