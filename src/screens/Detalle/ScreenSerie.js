import DetalleSerie from "../../components/DetalleSerie/DetalleSerie";
function ScreenSerie(props){
    const id = props.match.params.id
    return(
        <section className="detalleSerie">
            {/* Cambiar La pelicula por el query de la Url (Nombre de la serie/pelicula) */}
            <DetalleSerie />
        </section>

    )
}

export default ScreenSerie;
