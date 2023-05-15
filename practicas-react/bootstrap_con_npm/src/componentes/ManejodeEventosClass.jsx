import React, { Component } from 'react'
import Swal from 'sweetalert2';

export default class ManejodeEventosClass extends Component {
    constructor(props){
        super(props);
        this.state={
            contador:0
        }

        this.sumar=this.sumar.bind(this);
        this.restar=this.restar.bind(this);
    }


    sumar(e){
        console.log("sumar");
        this.setState(
            {
                contador: this.state.contador + 1
            }
        );
    }
  
  
  
    restar(e){
       if (this.state.contador>0){
        console.log("resta");
        this.setState(
            {
                contador: this.state.contador - 1
            }
        );
       }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El numero de Articulos no puede ser menor a 0!'
        })
       }
    }


  render() {
    return (
      <div>
        <h1>Manejo de estados atravez de clases y eventos</h1>
        <h3>{this.state.contador}</h3>
        <button className="btn btn-primary" onClick={this.sumar}>+</button>
        <button className="btn btn-primary" onClick={this.restar}>-</button>
      </div>
    )
  }
}
