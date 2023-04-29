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
export interface IPokemonDetails{
    order: number;
    sprites: {
      front_default : string;
    }
    types: IPokeType[];
  }

export interface ITypeDetails{
  pokemon : {
    pokemon : IInfoPokemon
    slot : number
  }[]
}