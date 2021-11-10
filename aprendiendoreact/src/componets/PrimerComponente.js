import React, { Component } from 'react';

class Primercomponente extends Component {
    render() {
        let receta = {
            nombre: 'pizza',
            ingredientes: ['Tomate', 'Queso', 'Salsa marinara'],
            calorias: 400
        }
        return (
            <div>
                <h1>Receta del dia: {receta.nombre} </h1>
                <h2>calorias: {receta.calorias} </h2>
                <ol>
                    {
                        //recorreremos el arreglo que esta dentro del json :
                        receta.ingredientes.map((ingrediente, i)=>{
                            console.log(ingrediente)
                            return(
                                <li key = {i}>
                                    {ingrediente}
                                </li>
                            );
                        })

                    }
                </ol>
            </div>
        )
    }

}

export default Primercomponente;
//con este archivo ejemplificamos la sintaxis basica para crear un componente de ract
//falta aun utilizar JSX para acoplar variables a nuetro codigo html

