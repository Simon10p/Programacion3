import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ResultadosBusqueda from "../../components/ResultadosBusqueda/ResultadosBusqueda"

function Busqueda(props){
    let busquedaUsuario = props.match.params.userImput
    return(
        <section>
            {/* Cambiar Buqueda al query de la Url (Lo que busca el usuario) */}
            <h1>Resultados de Busqueda: {busquedaUsuario} </h1>
            <ResultadosBusqueda busquedaUsuario = {busquedaUsuario}></ResultadosBusqueda>
          
        </section>

    )
}

export default Busqueda;





