import React from "react"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

function NotFound(){
    return(
        <React.Fragment>
            <Navbar/>
            <h1>Ups! Parece que no pudimos encontrar lo que buscabas</h1>
            <p>404 Not Found</p>
            <Footer/>
        </React.Fragment>
    )

}

export default NotFound;