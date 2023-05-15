/* en este archivo vamos a definir los hooks usestate useefect y usecontext */

import React, {useState} from 'react'
import Swal from 'sweetalert2';

export default function Hooks() {
    const[contador, setContador]=useState(0);
    /* const[contador2, setContador2]=useState(10); */

    const sumar =()=> setContador(contador+1);
    const restar=()=> {
      if(contador>0){
        setContador(contador-1)

      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El numero de Articulos no puede ser menor a 0!'
        })
      }
    };

    
   /*  console.log(useState()) */

  return (

    <>
    <h2>Hooks- use state</h2>
    <h3>{contador}</h3>
    <button className='btn btn-primary' onClick={sumar}>+</button>
    <button className='btn btn-primary' onClick={restar}>-</button>
    </>
  )
}
