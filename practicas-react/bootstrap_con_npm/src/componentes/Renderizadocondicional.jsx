import React, { Component } from 'react'

function Login(params) {
    return(
        <>
        <h3>login</h3>
        </>
    );
    
}
function Logout(params) {
    return(
        <>
        <h3>logout </h3>
        </>
    );
    
}


export default class Renderizadocondicional extends Component {
    constructor(props){
        super(props);
        this.state={
            session:true
        };

    }
  render() {
    return (
      <div>
        <h3>Renderizadocondicional</h3>
        {/* {
           this.state.session?<Login></Login>:<Logout></Logout>
        } */}
        {
            this.Desiscion()
        }
        
      </div>
    )
  }

  Desiscion(){
    /* setInterval(() => {
        if(this.state.session){
            this.setState({
                session: false
            })
        }else{
            this.setState({
                session:true
            })
        }
    }, 5000); */
    if(this.state.session){
        return <Login></Login>
    }else{
        return <Logout></Logout>
    }
  }

}
/* Dentro de este tipo de renderizado podemos realizar dos tipos de desiciones definiendo las 
siguientes reglas:
1.-En el metodo render no se puede utilizar una estructura if como tal 
se tiene que utilizar un condicional terciario que su sintaxis se define como:
{ condicion?opciontrue:opcionfalse}
2.-si quieres utilizar un procedimiento if como tal puedes crear una funcion propia del 
componente o una funcion alterna a la clase que tome la desicion

*/
