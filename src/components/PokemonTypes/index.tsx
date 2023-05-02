import style from './style.module.css';

type Props = {
    types: string[];
}

export const PokemonTypes = ({types}:  Props) => {
    return (
      // Type of Pokemon list
      <ul className={style.list}>
          {types.map((value, idx) => (
            // ${value}-${idx} So key do not repeat
            <div key={`${value}-${idx}`} className={`${style[value]} ${style.typeContainer}`}>
              <li>{value.toUpperCase()}</li>
            </div>
          ))}
      </ul>
    )
}
