/* el contexto de una aplicaion en react es para declarar variables que puedan ser accdedibles
desde el nodo del arbol que crea el contexto y sus hijos desde esta manera dejar de ladop las props para pasar pareametros 
consiste en hacer un stock de variables globales que puedn funcionar como estados se puede mandar solo las 

 */


import React from 'react'
import { createContext } from 'react';
import {  useState } from 'react'
import data from '../Json/data.json'
import HooksContext2 from './HooksContext2';

export const localContext= createContext();

export default function HooksContext() {
  const [datos, setData]= useState(data);
  
/*   const updateData=(newData)=>{
    setData(newData)
  } */
  
  return (
    <>
    {console.log('padre' + datos)}
    <localContext.Provider value={datos}>
      <HooksContext2></HooksContext2>
    </localContext.Provider>
    </>

  )
}