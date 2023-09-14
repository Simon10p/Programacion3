import React from "react";
import Buscar from "../FormularioBusqueda/FormularioBusqueda";
import { Link } from  'react-router-dom';
import "./Navbar.css"

let logo = ""

function Navbar() {
    return (
        <nav>
            <header className="containHeader">
                <div>
                    <img src="img/4467e9a78b04464facf17126f5db913f.png" className="logo" />
                </div>
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/verTodasPeliculas">Peliculas</Link>
                    </li>
                    <li>
                        <Link to="/verTodasSeries">Series</Link>
                    </li>
                    <li>
                        <Link to="/favoritos">Favoritos</Link>
                    </li>
                </ul>
                <Buscar/>
            </header>
        </nav>
    );
}
export default Navbar;
