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
                        <a href="./home.html">Home</a>
                    </li>
                    <li>
                        <a href="./generos.html">Generos</a>
                    </li>
                    <li>
                        <a href="./favoritos.html">Favoritos</a>
                    </li>
                </ul>
                <form className="iBusqueda" action="./busqueda.html" method="get">
                    <input
                        className="search"
                        type="search"
                        name="busqueda"
                        placeholder="Buscar"
                        value=""
                    />
                    <button type="submit">
                        <img src="./fotos/lupita.jpg" alt="" />
                    </button>
                </form>
            </header>
        </nav>
    );
}
export default Navbar;
