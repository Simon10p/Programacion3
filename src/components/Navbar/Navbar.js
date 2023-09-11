import React from "react";
import { Link } from  'react-router-dom';
function Navbar() {
    return (
        <nav>
            <header className="containHeader">
                <div>
                    <img src="./fotos/nuevo logo.jpeg" className="logo" />
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
