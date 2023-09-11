import React from "react";
import { Link } from  'react-router-dom';
import "./Navbar.css"

let logo = ""

function Navbar() {
    return (
        <nav>
            <header className="containHeader">
                <div>
                    <img src="public\img\4467e9a78b04464facf17126f5db913f.png" className="logo" />
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
                
            </header>
        </nav>
    );
}
export default Navbar;
