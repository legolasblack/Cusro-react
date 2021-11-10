import React, { Component as Component } from 'react';
import Logo from '../imagenes/logo-negro.png'
import { Link, NavLink} from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark " >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={Logo} class="img-fluid img-logo" alt="Logo MarketAquticPlants" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <NavLink className="nav-link active" to="/Genrematch">Genrematch</NavLink> 
              </li>
              <li class="nav-item">
              <NavLink className="nav-link active" to="/peliculas">Peliculas</NavLink> 
              </li>
              <li class="nav-item dropdown">
              <NavLink className="nav-link active" to="/Hooks">Hooks</NavLink> 
              </li>
              <li class="nav-item">
              <NavLink className="nav-link active" to="/Api">Leyendo Api</NavLink>
              </li>
            </ul>{/*  <form class="d-flex" >
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-primary btn-md" type="submit">Search</button>

            </form> */}
            <ul class="navbar-nav ">
              <li class="nav-item dropdown">
              <NavLink className="nav-link" to="/hola"> Registrate</NavLink> 
              </li>
              <li class="nav-item dropdown">
              <NavLink className="nav-link" to="/">Sign up</NavLink> 
              </li>
            </ul>
          
          </div>
        </div>
      </nav>

    );
  }
}

export default Menu;