import React from 'react'
import { IInfoPokemon } from '../interfaces/interfaces'
import Pokemon from './Pokemon'

type Props = {
    pokemon : IInfoPokemon[]
}

const Pokedex = ({pokemon} : Props) => {
    const list = pokemon.map((value) => (
        <Pokemon name={value.name} url={value.url} key={value.name}/>
      ))
  return (
    <div>{list}</div>
  )
}

export default Pokedex