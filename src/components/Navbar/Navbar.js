import React from "react";
function Navbar() {
    return (
        <nav>
            <header className="containHeader">
                <div>
                    <img src="./fotos/nuevo logo.jpeg" class="logo" />
                </div>
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/verTodasPeliculas">Generos</Link>
                    </li>
                    <li>
                        <Link to="/verTodasSeries">Favoritos</Link>
                    </li>
                    <li>
                        <Link to="/favoritos">Favoritos</Link>
                    </li>
                    <li>
                        <Link to="/detalle/:id">Favoritos</Link>
                    </li>
                </ul>
                
            </header>
        </nav>
    );
}
export default Navbar;
