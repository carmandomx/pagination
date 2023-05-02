import React, { useEffect, useState } from 'react'
import { IGeneration } from '../interfaces'

const useFetchGeneration = (order:number) => {
   
    const [gen,setGen] = useState<string>('')
    const fetchGenerations = async ()=>{
            const req = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${order}/`)
            const data: IGeneration = await req.json()
            setGen(data.generation.name)
            
        }
        
            useEffect(()=>{
                fetchGenerations().catch(console.error)
            },[order])
            return {gen}
        }
        
export default useFetchGeneration