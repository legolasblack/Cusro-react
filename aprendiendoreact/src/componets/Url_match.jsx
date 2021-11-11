import {useState, useEffect} from 'react'

function Url_match(){

    const url="http://noirblanc.com.mx:9090/download/";
    const url_youtube="https://www.youtube.com/watch?v=";
    const id_video="K6q-fMAtYBE";
    const [generos, setGeneros]=useState([]);

    const fetchApi= async()=>{
        console.log(url+id_video);
        console.log(url_youtube+id_video);
        const response = await fetch(url+id_video);
        console.log("status: "+response.status);
        const json = await response.json();
        setGeneros(json);
        console.log("acabamos la funcion")
    }

    useEffect(()=>{
        fetchApi();
    }, [])

    return(
        <div>
             {console.log(generos)}
        </div>
      
    )
}

export default Url_match;