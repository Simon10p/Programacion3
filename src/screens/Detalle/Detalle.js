import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Detalle(){

    return(
        <section>
            {/* Cambiar La pelicula por el query de la Url (Nombre de la serie/pelicula) */}
            <h1>Detalle de La pelicula</h1>
            <Navbar/>
            <Footer/>
        </section>

    )
}

export default Detalle;
