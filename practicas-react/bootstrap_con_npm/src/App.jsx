
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import FuentesGoogle from './componentes/FuentesGoogle';
import ComponenteClassSintaxis from './componentes/ComponenteClassSintaxis';
import ComponenteFunctionSintaxis from './componentes/ComponenteFunctionSintaxis';
import ComponenteArrowSintaxis from './componentes/ComponenteArrowSintaxis';
import ManejoEstados from './componentes/ManejoEstados';
import Renderizadocondicional from './componentes/Renderizadocondicional';
import ManejodeJson from './componentes/ManejodeJson';
import ManejodeEventosClass from './componentes/ManejodeEventosClass';
import Hooks from './componentes/Hooks';

function App() {
  let max_art=5
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">hello word</div>
          <div className="col">hello word</div>
          <div className="col">hello word</div>
        </div>
        <FuentesGoogle></FuentesGoogle>
        <ComponenteClassSintaxis msg="desde el padre llegue"></ComponenteClassSintaxis>
        <ComponenteFunctionSintaxis msg="desde el padre llegue a la function"></ComponenteFunctionSintaxis>
        <ComponenteArrowSintaxis msg="holi desde el padre de la constante"></ComponenteArrowSintaxis>
        <ManejoEstados></ManejoEstados>
        <Renderizadocondicional></Renderizadocondicional>
        <ManejodeJson></ManejodeJson>
        <ManejodeEventosClass></ManejodeEventosClass>
      </div>

      <hr />
      <h1>Componentes en basea hooks</h1>
      <Hooks maximo={max_art} />

    </div>
  );
}

export default App;
