import React, { Component } from 'react';

class Ciclos_de_vida extends Component {
    //existen otros metodos para administarr el tiempo de vida de un componente se describen a continuacion
    //los principales periodos de vida se dividen en tres tiempos, antes de montar, durante el montado y cuando se desmonta un componente, 
    //componentWillMount()
    //componentDidMount()
    //componentWillUnmouent() 
    componentDidMount() {
       // aqui iria el codigo de la funcion 
    }

    render() {
        return (
        <div>
            <p>
                hola soy los ciclos de vida
            </p>
        </div>);
    }
ls

}

export default Ciclos_de_vida;