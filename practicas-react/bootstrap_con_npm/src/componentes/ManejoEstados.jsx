
import React, { Component } from 'react';

class ManejoEstados extends Component {
    constructor(props){
        super(props);
        this.state={
            contador:0,
        };

       /*  setInterval(() => {
            this.setState({
                contador:this.state.contador+1
            });
            
        }, 1000); */
    }
  render() {
    return (
      <>
      <div className="row">
        <div className="col">
            <h1>Este es el estado de un componente class: {this.state.contador}</h1>
        </div>
      </div>
      </>
    )
  }
}

export default ManejoEstados;


{
  /* para poder correr este modulo es necesario descomentar la funcion set interval 
  se procede a comentar porque genera un warning, dado a que el estado no debe 
  de ser manipulado de un contenedor que no a sido montado */
}