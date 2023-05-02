import React from 'react'

type Props = {
    types:string[]
}

const PokemonTypes = ({types}: Props) => {
    const classType = (typeString:string)=>{
        return typeString+ " type";
    }
  return (
    <ul style={{
        padding:0,
        margin:0,
        listStyleType:"none",
        display:"flex",
        justifyContent:"space-evenly",
    }}
    className="pokemon-type"
    >
        { types.map((value) => <li className={classType(value)} key={value}> {value}</li>  )}
    </ul>
  )
}

export default PokemonTypes;