import React, { useState } from 'react'

type Props = {
    className: string;
    value: string;
    onChange: any;
}
export const SearchPokemon = ({className, value, onChange}: Props) => {

    const [searchBox, setSearchBox] = useState('');
    console.log(searchBox);

    return (
        <div>
            <form className="poke-search">
            <input
                className={className}
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Search Pokémon"
            />
            </form>
        </div>
    )
}
