
type Props = {
    types: string[];
}

export const PokemonTypes = ({types}:  Props) => {
    return (
      // Type of Pokemon list
        <ul style={{
            padding: 0,
            margin:0,
            listStyleType: 'none',
            display: 'flex',
            justifyContent: 'center',
          }}>
            {types.map((value) => (
              <div className={value + ' typeContainer'}>
                <li  key={value}>{value.toUpperCase()}</li>
              </div>
            ))}
        </ul>
    )
}
