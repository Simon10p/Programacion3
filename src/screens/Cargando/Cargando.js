import React from "react";
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

function Cargando(){
    return(
        <React.Fragment>
            <Navbar/>
            <h1>¡No te desesperes! </h1>
            <h2>Cargando la página</h2>
            <Footer/>
        </React.Fragment>
    )
}

export default Cargando