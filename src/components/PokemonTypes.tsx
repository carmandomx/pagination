import React from 'react'

type Props = {
    types : string[];
}

const PokemonTypes = ({types}: Props) => {
  return (
    <ul>
    {types.map((value) => <li key={value}>{value}</li>)}
  </ul>
  )
}

export default PokemonTypes