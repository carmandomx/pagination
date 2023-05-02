import { useEffect, useState } from "react"
import { IPokemonDetails } from "../interfaces"


const URL = 'https://pokeapi.co/api/v2/pokemon/1/'
const useFetchPokemonDetails = (url:string) => {
    const [state, setState] = useState(null)
    const [order,setOrder] = useState(0)
    const [sprite,setSprite] = useState('')
    const [types,setTypes] = useState<string[]>([])
    const [height, setHeight] = useState<number>(0)
    const [weight, setWeight] = useState<number>(0)


    useEffect ( ()=>{
        const fn = async ()=>{
            const req = await fetch(url)
            const data: IPokemonDetails =await req.json()

            //setState(data)
            setOrder(data.id)
            setSprite(data.sprites.front_default)
            setHeight(data.height)
            setWeight(data.weight)
            const originalData = data.types
            const newData = originalData.map(({type})=>type.name)
            setTypes(newData)
        }
        fn().catch(console.error)
    },[url])

    return {order, sprite, types, height, weight}
}

export default useFetchPokemonDetails