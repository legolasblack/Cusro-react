import logo from './logo.svg';
import './App.css';
//importacion de componentes
import Primercomponente from './componets/PrimerComponente';
import Peliculas from './componets/Peliculas';
import Header from './componets/Header';
import Slider from './componets/Slider';
import Pruebaestados from './componets/Pruebaestados';
//import "./css/bootstrap-4.5.0-dist/css/bootstrap.min.css"
import Prueba_boostrap from './componets/Prueba_boostrap';
import Menu from './componets/Menu';
import Padre_props from './componets/Padre_props';
import Ciclos_de_vida from './componets/Ciclos_de_vida';
import Audios_genrematch from './componets/Audios_genrematch';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';




function App() {
  var nombre = "Diego Iran";
  var presentacion = <h2>Hola soy {nombre}, Bienvenidos...</h2>
  return (
    <div className="App">
      <BrowserRouter>
      <Menu />
      <div className="h1">
        aqui empiezan los componentes
      </div>
      <hr />
      <Router />
      <hr />
      </BrowserRouter>
    </div>
  );
}

export default App;
