import ListaSeries from "../../components/ListaSeries/ListaSeries";
import ListaPeliculas from "../../components/ListaPeliculas/ListaPeliculas"
import React from "react";

function Home(){
    return(
        <React.Fragment>{/* Cambiar La pelicula por el query de la Url (Nombre de la serie/pelicula) */}
            <ListaPeliculas/>
            <ListaSeries />
        </React.Fragment>

    )
}

export default Home;
