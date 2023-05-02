export interface IInfoPokemon {
    name: string;
    url: string;
}

export interface IListResults<T> {
    count: number;
    next: null | string;
    previous: null | string;
    results: T[];
}

interface IPokeType {
    slot: number;
    type: IInfoPokemon;
}

export interface IPokemonDetails {
    height: number;
    weight: number;
    id: number;
    sprites: {
        front_default: string;
    }
    types: IPokeType[];
    species: {
        url: string;
    };
}

export interface IIdAndName {
    id: number;
    name: string;
}

export interface ITypeDetails {
    pokemon: {
        pokemon: IInfoPokemon,
        slot: number;
    }[]
}