import React, { Component } from "react";

class Pruebaestados extends Component {


    //el estado es un json que nos ayuda a mantener las variable que queremos actualizar en tiempo real 
    //para que esto funcione necesitamos utilizar la funcion setState(), mandando un json para actualizar nuestro json 
   /* state = {
        contador: 0,
        bandera: 0,
        bandera2: 0
    }*/
    constructor(props){
        super(props);
        this.state={
            contador: 0,
            nombre: "diego iran",
            comentario: "me caes bien gordo"
        }
    }



    sumar = (e) => {
        //this.state.contadorcontador=this.contador++;
        this.setState({
            contador: (this.state.contador + 1)
        });
    }
    restar = (e) => {
        this.setState({
            contador: (this.state.contador - 1)
        });
    }



    render() {
        return (
            <div>
                <h1>Realizando pruebas de estado:</h1>
                <p>Contador: {this.state.contador}</p>
                <p>
                    <input type="button" class="btn btn-md btn-primary me-3" value="Sumar" onClick={this.sumar}></input>
                    <input type="button" class="btn btn-md btn-primary" value="Restar" onClick={this.restar}></input>
                </p>
            </div>
        )
    }
}

export default Pruebaestados;