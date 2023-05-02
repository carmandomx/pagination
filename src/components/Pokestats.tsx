import React from 'react'

type Props = {
    types:string[];
    order:number;
    name:string;
    height:number;
    weight:number;
    generation:number;

}

const Pokestats = ({types,order, name, height, weight, generation}: Props) => {
    const link = `https://bulbapedia.bulbagarden.net/wiki/${name}_(Pok%C3%A9mon)`;
    const classType = (typeString:string)=>{
        return typeString+ " type";
    }
  return (
    <div className='pokemon-info'>

        <div className='pokemon-container'>
            <p className='pokemon-id'># {order}</p>
            <h2 className="pokemon-name"><a href= {link} >{name}</a></h2>
        </div>
        <div className='pokemon-type'>
            { types.map((value)=><p className={classType(value)} key={value}>{value}</p>) }
        </div>
        <div className='pokemon-stats'>
            <p className='stat'> <strong>Height:</strong> {height} m</p>
            <p className='stat'> <strong>Weight:</strong> {weight} kg</p>
            <p className='stat'> <strong>Generation:</strong> {generation} </p>
        </div>
    </div>
  )
}
export default Pokestats