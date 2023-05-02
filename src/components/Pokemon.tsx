import React from 'react'
import useFetchPokemonDetails from '../domain/useFetchPokemonDetails';
import Pokestats from './Pokestats';

type Props = {
    name:string;
    url:string;
}

const Pokemon = ({name, url}: Props) => {
    const { order, sprite, types, height, weight, generation } = useFetchPokemonDetails(url);

  return (
    <div className='pokemon'>
        <p className="pokemon-id-background">#{order}</p>
        <figure className="pokemon-img">
            <img alt={name} src={sprite} />
        </figure>
        <Pokestats types={types} order={order} name={name} height={height} weight={weight} generation={generation}/>
    </div>
  )
}

export default Pokemon