import React from "react";
import './navBar.css'
// import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
// import { CartContext } from "./CartContext";

function NavBar() {
    // style={{ "--bs-scroll-height: 100"}}
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Home</Link >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >

                            <li className="nav-item dropdown">
                                <p className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"  >
                                    Productos
                                </p>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/productos/cat/Personajes">Personajes</Link ></li>
                                    <li><Link className="dropdown-item" to="/productos/cat/Naves">Naves</Link ></li>
                                    <li><Link className="dropdown-item" to="/productos/cat/Logos">Logos</Link ></li>
                                    <li><Link className="dropdown-item" to="/productos/cat/Droides">Droides</Link ></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/login">Iniciar Sesion</Link >
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup" target="_blank">Registrarse</Link >
                            </li>

                            <li className="nav-item">
                                <Link id="btnCerrarSesion" className="nav-link" to="/">Cerrar Sesion</Link >
                            </li>
                            <li className="nav-item">
                                <Link id="btnCarrito" className="nav-link" to="/carrito">Carrito</Link >
                            </li>
                        </ul>

                    </div>
                </div>
                <Link to="/perfil"> <button id="bienvenido"></button></Link >
            </nav>
        </>
    );
}

export default NavBar;