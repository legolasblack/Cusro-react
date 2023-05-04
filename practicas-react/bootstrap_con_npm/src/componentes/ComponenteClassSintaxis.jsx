import React, {Component} from "react";//estamos importando en esta linea la clase componente propia de react para poder hacer la herencia dentro de las nuevas clases

class ComponenteClassSintaxis extends Component{
    render(){
        return (
            <>
            <div className="row">
                <div className="col">
                    <h1>hello word desde el componente hecho con class</h1>
                    <h2>y este es el mensaje mandado desde el padre: {this.props.msg}</h2>
                </div>
            </div>
            </>
        );
    }
}

export default ComponenteClassSintaxis;