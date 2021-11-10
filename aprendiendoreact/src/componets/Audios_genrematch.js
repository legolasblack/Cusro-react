import React, { Component } from 'react';
import Ficha_pelicula from './Ficha_pelicula';
import Primercomponente from './PrimerComponente';

class Audios_genrematch extends Component {
    state = {
        peliculas: [
            { titulo: 'country', imagen: 'https://i.ytimg.com/vi/yqEroLatPMQ/maxresdefault.jpg' },
            { titulo: 'jazz', imagen: 'https://4.bp.blogspot.com/-6fVxWZH7gLo/U6DMeLkDgsI/AAAAAAAAMJ0/SImHYoRrYjI/s1600/Blended+-+0.jpg' },
        ],
        nombre: 'Iran Contreras',

       
    }

    render() {

        return (    
            <div id="articles">
                <h2>Peliculas</h2>
                <p>Seleccion de peliculas de {this.state.nombre}</p>
                <hr></hr>
                {
                    //con esta funcion se recorre un arreglo
                    this.state.peliculas.map((pelicula, i) => {
                        return (
                            <article className="article-item" id="article-template">
                                <div className="image-wrap">
                                    {console.log(this.state.peliculas.imagen)}
                                    <img src={pelicula.imagen} alt={pelicula.titulo} />
                                </div>
                                <h2>{pelicula.titulo} </h2>
                                <span className="date">
                                    Hace 5 minutos
                                </span>
                                <a href="#">Leer mas</a>
                            </article>
                        )

                    })
                }
                <Ficha_pelicula />

            </div>
        );
    }
}

export default Audios_genrematch;

