import React from 'react'
import useFetchTypes from '../domain/useFecthTypes'
import useFetchPokemonByType from "../domain/useFetchPokemonByType";


type Props = {
  selectedtype:string;
}

const Navbar = ({selectedtype}:Props) => {
  const {types} = useFetchTypes();
    const { setSelectedType } = useFetchPokemonByType();

    const list = types.map((value)=> <option key={value.name} value={value.url}>{value.name.toUpperCase()}</option>)
  return (
    <header>
        <nav className='nav'>
            <img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="Pokedex Logo"/>
            <ul className="nav-list">
                <li>
                  <select 
                  value = { selectedtype }
                  onChange={(ev)=> {
                      setSelectedType(ev.target.value);
                  }} 
                  >
                  <option value="">Select a type!!</option>
                  {list}
                  </select>
              </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar