import DetallePelicula from "../../components/DetallePelicula/DetallePelicula";
function ScreenPelicula(props){
    const id = props.match.params.id
    return(
        <section className="detalleSerie">
            {/* Cambiar La pelicula por el query de la Url (Nombre de la serie/pelicula) */}
            <DetallePelicula id = {id} />
        </section>

    )
}

export default ScreenPelicula;
