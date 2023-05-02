export interface IInfoPokemon{
    name:string;
    url:string;
}
export interface IlistResults<T>{
    count:number;
    next:string;
    previous:null;
    results:T[];
}

interface IPoketype{
    slot:number;
    type:{
        name:string;
        url:string;
    }
}

export interface IPokemonDetails<>{
    id:number;
    sprites:{
        front_default:string;
    }
    types:IPoketype[];
    height:number;
    weight:number;
    species: {
        url: string;
      };
}

export interface IIdAndName {
    id:number;
    name:string;

}

export interface ITypeDetails{
    pokemon : {
      pokemon : IInfoPokemon
      slot : number
    }[]
    }