/* el contexto de una aplicaion en react es para declarar variables que puedan ser accdedibles
desde el nodo del arbol que crea el contexto y sus hijos desde esta manera dejar de ladop las props para pasar pareametros 
consiste en hacer un stock de variables globales que puedn funcionar como estados se puede mandar solo las 

 */


import React from 'react'
import { createContext } from 'react';
import { useState, useEffect } from 'react'
import data from '../Json/data.json'
import HooksContext2 from './HooksContext2';
import Swal from 'sweetalert2';

export const userContext = createContext();

export default function HooksContext() {

  const [userState, setUserState] = useState(null)
  let urlinfo='https://pokeapi.co/api/v2/pokemon/snorlax';
  useEffect(() => {


    fetch(urlinfo).then((resp) => {
      return resp.json()
        ;
    }).then((data) => {
      setUserState(data)
      Swal.fire(
        'Good job!',
        'Se recibio la informacion correctamente',
        'success'
      )
    }).catch(
      () => console.log('Error al cargar el rastreo ')
    )


  }, [urlinfo]);

  return (
    <>
    <userContext.Provider value={userState}>
      <HooksContext2></HooksContext2>
    </userContext.Provider>
    </>

  )
}