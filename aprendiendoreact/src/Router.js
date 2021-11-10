import React, { Component } from 'react'
import { Routes, Route, Switch } from 'react-router-dom'
import Ciclos_de_vida from './componets/Ciclos_de_vida'
import Header from './componets/Header';
import Hooks from './componets/Hooks';
import Padre_props from './componets/Padre_props';
import Peliculas from './componets/Peliculas';
import Prueba_boostrap from './componets/Prueba_boostrap';
import Leyendo_url from './componets/Leyendo_url'

export class Router extends Component {
    render() {
        return (
            
         <Switch>
         <Route path="/Genrematch" component={Padre_props}/>
         <Route path="/Peliculas2" element={<Prueba_boostrap/>}/>
         <Route path="/peliculas" component={Peliculas}/>
         <Route path='/Api' component={Leyendo_url}/>
         <Route path="/hola">
             <h1>Hola mundo</h1>
         </Route>
         <Route path="/Hooks" component={Hooks}></Route>
         </Switch>
         
        )
    }
}

export default Router;
