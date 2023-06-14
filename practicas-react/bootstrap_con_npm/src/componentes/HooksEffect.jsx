import React from 'react'
import { useEffect, useState } from 'react'



/* Existen tres tiempos diferentes para use effect 
se utilizan :
antes del montaje del componente
cada que tenemos una actualizacion en el componente 
al desmontar el componente  */



export default function HooksEffect() {

  let urlApiPokemon = 'https://pokeapi.co/api/v2/pokemon/pikachu';
  let urlApiRastreo = 'http://216.250.126.250/Rastreo_Get_Guias/gts-5160';
  let guia= 'gts-5160'; 
  let urlApiRastreomasGuia= urlApiRastreo+guia;

  const [pokemon, setPokemon] = useState([])
  const [recuperado, setRecuperado] = useState(false)
  const [historailGuia, setHistorialGuia]= useState([])

  useEffect(()=>{
    fetch(urlApiRastreomasGuia).then((resp)=>{
      return resp.json()
      ;
    }).then((data)=>{
      /* console.log(data); */
      setHistorialGuia(data);
    }).catch(
      ()=>console.log('Error al cargar el rastreo ')
    )
  },[])

  useEffect(() => {
    fetch(urlApiPokemon)
      .then((response) => {
        return response.json()
      })
      .then((pok) => {
        setPokemon(pok)
        setRecuperado(true)
      }).catch(()=>{
        console.log('Error al consultar la api pokemon ')
      })
  }, [])



  if (recuperado)
 {
  console.log(pokemon)
  console.log(historailGuia)
 }
  else
    return (<div>recuperando datos...</div>)
}




