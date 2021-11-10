import React, { Component } from 'react';

class Hijo_props extends Component {
    render() {
        return (
            <div className="col">
                <div class="card" style={{ width: "18rem" }} >
                    <img src={this.props.pelicula.imagen} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{this.props.pelicula.titulo}</h5>
                        <hr/>
                        <p class="card-text">{this.props.pelicula.reseña}</p>
                        <div class="btn-group">
                        <a href="#" class="btn btn-primary active">Comprar</a>
                        <a href="#" class="btn btn-primary">Agregar al carrito</a>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Hijo_props;