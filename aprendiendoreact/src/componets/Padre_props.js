import React, { Component } from 'react';
import Hijo_props from './Hijo_props';

//En este ejemplo de dos elementos padre e hijo pasaremos datos del padre al hijo por medio de las props 
//realizaremos una tabla de clientes pasando y definiedo una varias tarjetas de peliculas diseñadas con bootstrap 5  de json en el padre y se transmiten al hijo para poder renderizarlos.

class Padre_props extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos_peliculas: [
                { titulo: 'country', imagen: 'https://i.ytimg.com/vi/yqEroLatPMQ/maxresdefault.jpg' },
                { titulo: 'country', imagen: 'https://i.ytimg.com/vi/yqEroLatPMQ/maxresdefault.jpg' },
                { titulo: 'country', imagen: 'https://i.ytimg.com/vi/yqEroLatPMQ/maxresdefault.jpg' },
                { titulo: 'jazz', imagen: 'https://i.musicaimg.com/articulos/musica-jazz.jpg' },
                { titulo: 'jazz', imagen: 'https://i.musicaimg.com/articulos/musica-jazz.jpg' },
                { titulo: 'math', imagen: 'https://i.musicaimg.com/articulos/musica-jazz.jpg' },
            ]
        }
    }
    render() {
        return (
            <div className="container themed-container">
                <div className="row justify-contentexit-center">
                    <h1>Modelacion de recomendaciones</h1>
                    <div class="row">
                        <div class="col-3">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/E6Niqxw_Yz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>

                    {this.state.datos_peliculas.map((pelicula, i) => {
                        return (
                            <Hijo_props pelicula={this.state.datos_peliculas[i]} />
                        )
                    }
                    )}
                </div>
            </div>

        );
    }


}

export default Padre_props;