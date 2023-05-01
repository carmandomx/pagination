import React, { useState } from 'react'

export const SearchPokemon = () => {

    const [searchBox, setSearchBox] = useState('');
    console.log(searchBox);

    return (
        <div>
            <form className="poke-search">
                <input 
                    type="text" name="poke-input" 
                    placeholder="Search a pokemon"
                    value={searchBox} 
                    onChange={e => setSearchBox} 
                />
                <button className="btn-search">Search</button>
                <button className="btn-reset">Reset</button>
            </form>
        </div>
    )
}
