import React, { localContext } from './HooksContext'
import { useContext } from 'react';


export default function HooksContext2() {

    const data = useContext(localContext)

    

  return (
    <>
    {console.log('hola ' + data)}
    </>
    
  )
}
