export interface IInfoPokemon {
    name:string;
    url: string;
}

export interface IlistResults<T>{
    count: number;
    next: string;
    previous: null;
    results: T[]
}

interface IPokeType{
    slot:number
    type:{
        name:string
        url:string
    }
}

export interface IPokemonDetails {
    id: number
    weight:number
    height:number
    sprites: {
        front_default:string
    }
    types: IPokeType[]
}

export interface IIdAndName {
    id: number
    name: string
}

export interface ITypeDetails {
    pokemon:{
        pokemon:IInfoPokemon,
        slot:number
    }[]
}

export interface IGeneration{
    generation: IInfoPokemon
}