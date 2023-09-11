import React from "react";
import "./Footer.css"
function Footer() {
    return (
        <footer className="containFooter">
    <div className="tituloFooter"> 
        <img src="./fotos/nuevo logo.jpeg" className="logoFooter" />
        <img src="./fotos/The movie data base.svg" className="logoFooter"/>
    </div>
    <div className="footerNombres">
       <div className="nombres">Simon Diez Peña </div>
       <div className="nombres">Nicolas Shakalis</div>
       <div className="nombres">Mateo Podetti</div>
    </div>
    <p>© 2022 Peliseries todos los derechos reservados.</p>
    </footer>
    );
}
export default Footer;
