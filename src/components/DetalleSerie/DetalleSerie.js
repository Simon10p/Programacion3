import React, {Component} from "react";
class DetalleSerie extends Component{

    constructor(props){
        super(props)
        this.state ={
            infoSerie: ""
        }
    }
    componentDidMount(){
    const id_serie = this.props.match.params.id
    fetch(`https://api.themoviedb.org/3/tv/${id_serie}?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US`)
        .then(response => Response.json())
        .then(datos => this.setState =
            {
                infoSerie:datos,
                path: datos.poster_path,

            }
        )
        .catch(error => console.log(error))
    }
    render(){
        return(
            <React.Fragment>
        <img src="https://image.tmdb.org/t/p/w500/${infoSerie.path}" alt = "${this.state.infoSerie.original_title}" className="fotoDetalle"/>
       <article className="infoPelisTitulos">
            <p>Rating: <span class="infoPelisDetalles">  ${this.state.infoSerie.vote_average} </span></p>
            <p className="generos">Genero: </p>
            <p>Año de estreno:  <span class="infoPelisDetalles">  ${this.state.infoSerie.first_air_date}</span></p>
            <p>Temporadas:<span class="infoPelisDetalles">${this.state.infoSerie.number_of_seasons} </span></p>
            <p className="sinopsis">Sinopsis: </p>
            <span className="infoPelisDetalles">${this.state.infoSerie.overview}</span>
            <div className="proveedores"> <p>Donde mirar:</p></div>
            <a href="#recomendaciones"><p class=" boton_favs boton_recomendaciones">Ver recomendaciones</p></a>
            <p className="boton_favs boton_favoritos_serie">Agregar a favoritos</p>
           </article>
            </React.Fragment>            
        )
    }
}
export default DetalleSerie;
