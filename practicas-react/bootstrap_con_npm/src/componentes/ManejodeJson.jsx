import Listadodeframeworks from "../Json/Frameworks.json"/* en esta  linea hacemos el import de un archivo 
json que se encuentra en las carpetas de json si el no puede funcionar */
import React, { Component } from 'react'

 function ElementoLista(props) {
  return (
   <>
   <li>
    <a href={props.elemen.web}>{props.elemen.name}</a>
   </li>
   </>
  )
}


export default class ManejodeJson extends Component {
  render() {
    return (
      <div>
        <ol>
            <h3>Frameworks</h3>
            <ul>
              {
                Listadodeframeworks.Frameworks.map((x,i)=>
                    <ElementoLista key={i} elemen={x}></ElementoLista>
                )
              }
            </ul>
        </ol>
      </div>
    )
  }
}

/* export default class ManejodeJson extends Component {
  render() {
    return (
      <div>
        <ol>
            <h3>Frameworks</h3>
            <ul>
                {
                    Listadodeframeworks.Frameworks.map((elemento, index)=> 
                    <li key={elemento.id}>
                        <a key={elemento.id} href={elemento.web}>{elemento.name}</a>
                        {console.log(elemento.id+" "+ index)}
                    </li>
                    )
                }
            </ul>
        </ol>
      </div>
    )
  }
} */
