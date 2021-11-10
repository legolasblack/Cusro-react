import React, { Component } from 'react';
import logo from '../imagenes/logo-negro.png';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="center">
                    { /*<!--LOGO-->*/}
                    <div id="logo">
                        <a href="index.html">
                            <img src={logo} className="app-logo" alt="Logotipo">
                                {/* <!-- <span id="brand">
                                    <strong>MAP </strong>
        </span>-->*/}</img></a>
                    </div>

                    { /*<!--MENU DE NAVEGACION-->*/}
                    <nav id="menu">
                        <ul>
                            <li>
                                <a href="#">Inicio</a>
                            </li>
                            <li>
                                <a href="#">Plantas</a>
                            </li>
                            <li>
                                <a href="#">Peces</a>
                            </li>
                            <li>
                                <a href="contact-form.html">Contacto</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                        </ul>
                    </nav>
                    {/* <!--div para dividir y limpiar las areas flotantes libres-->*/}
                    <div className="clearfloat"></div>
                </div>
            </header>
        );
    }
}

export default Header;