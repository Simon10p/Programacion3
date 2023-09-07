import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ListaPeliculas from "../../components/ListaPeliculas/ListaPeliculas"
import React from "react";

function Home(){

    return(
        <React.Fragment>
            {/* Cambiar La pelicula por el query de la Url (Nombre de la serie/pelicula) */}
            <h1></h1>
            <Navbar/>
            <ListaPeliculas/>
            <Footer/>
        </React.Fragment>

    )
}

export default Home;
