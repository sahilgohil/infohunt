import React from "react";
import { useState,useEffect,createContext } from "react";

const NasaContext = createContext()

function NasaContextProvider(props)
{
    const [nasaData, setNasaData] = useState([])

    useEffect(()=>{
        fetch('https://api.nasa.gov/planetary/apod?count=9&api_key=SgSoQgtdDi6ptwxZzo9i4upwEgIGQ4TpvGVOFesc')
        .then(res => res.json())
        .then(data => setNasaData(data.map((item,index)=>({id:index+1,...item}))))
    },[])

    return(
        <NasaContext.Provider value={nasaData}>
            {props.children}
        </NasaContext.Provider>
    )
}

export {NasaContextProvider,NasaContext}