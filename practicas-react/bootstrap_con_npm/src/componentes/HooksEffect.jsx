import React from 'react'
import { useEffect, useState } from 'react'



/* Existen tres tiempos diferentes para use effect 
se utilizan :
antes del montaje del componente
cada que tenemos una actualizacion en el componente 
al desmontar el componente 
la diferencia existe dentro de la declaracion del use efect 
representemos cada uno de los tiempos de vida 

*/



export default function HooksEffect() {

  const [pokemon, setPokemon] = useState([])
  const [recuperado, setRecuperado] = useState(false)
  const [historialGuia, setHistorialGuia]= useState([])

  let urlApiPokemon = 'https://pokeapi.co/api/v2/pokemon/snorlax';
  let urlApiRastreo = 'http://216.250.126.250/Rastreo_Get_Guias/';
  let prefijo='per-';
  let numguia=80552;
  let guia= prefijo + numguia; 
  let urlApiRastreomasGuia= urlApiRastreo+guia;


  

  //eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{
    fetch(urlApiRastreomasGuia).then((resp)=>{
      return resp.json()
      ;
    }).then((data)=>{
      console.log(data);
      console.log('se updetio el componente desde guias ');
      setHistorialGuia(data);
      setRecuperado(true);
    }).catch(
      ()=>console.log('Error al cargar el rastreo ')
    )
  },[urlApiRastreomasGuia])


  

  useEffect(() => {
    fetch(urlApiPokemon)
      .then((response) => {
        return response.json()
      })
      .then((pok) => {
        console.log('se updetio el componente desde pokemon ');
        setPokemon(pok)
      }).catch(()=>{
        console.log('Error al consultar la api pokemon ')
      })
  }, [urlApiPokemon])



  if (recuperado)
 {
  console.log(pokemon)
  console.log(historialGuia)
  return(
   
    <>
   
  <h1>Rastreo de guia:</h1>
  <h1>{historialGuia.Guias[0].RastreoDetalle[4].Descripcion}</h1>
  </>
  )
 }
  else
    return (<div>recuperando datos...</div>)
}


