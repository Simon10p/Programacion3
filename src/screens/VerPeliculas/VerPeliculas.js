import ListaPelicula from "../../components/ListaPeliculas/ListaPeliculas";
import React from "react";
import Filtro from "../../components/Filtro/Filtro";

function VerPeliculas(){
    return(
        <React.Fragment>
        <Filtro filtrar={(texto) => this.filtrarPeliculas(texto)} />
        <ListaPelicula />
    </React.Fragment>

    )

}
export default VerPeliculas