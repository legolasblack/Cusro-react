import { render } from "@testing-library/react";
import { useState, useEffect} from "react";

function Hooks() {
    const [contador, setContador]= useState(1);

    useEffect(() => {
        document.title='you cliked '+ contador +' times';
    },  )

      function aumentar(){
        setContador(contador + 1)
      }
         
      

        return(
            <div className="container">
            <div className="row">
                <div className="col">
                    <h1>vamos con la practica de Hooks</h1>
                    <h2>Contador: {contador}</h2>
                    <button className="btn btn-primary my-1" onClick={aumentar}>Aumentar</button>
                </div>
            </div>
        </div>
        );
    
}

export default Hooks;