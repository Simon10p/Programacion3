import React, {Component} from "react";
import "./DetalleSerie.css"

let img = "https://image.tmdb.org/t/p/w500/"

class DetalleSerie extends Component{

    constructor(props){
        super(props)
        this.state ={
            infoSerie: []
        }
    }
    componentDidMount(){
    const id_serie = this.props.id
    fetch(`https://api.themoviedb.org/3/tv/${id_serie}?api_key=0c5fb97f0c55576b638b49d73fa8d73e&language=en-US`)
        .then(response => response.json())
        .then(datos => this.setState(
            {
                infoSerie:datos,
            }
        )
        )
        .catch(error => console.log(error))
    }
    render(){
        console.log(this.state.infoSerie)
        return(
            <React.Fragment>
        <img src={img + this.state.infoSerie.poster_path} alt = "" className="fotoDetalle"/>
       <article className="infoPelisTitulos">
            <p>Rating: <span className="infoPelisDetalles">  ${this.state.infoSerie.vote_average} </span></p>
            <p className="generos">Genero: </p>
            <p>Año de estreno:  <span className="infoPelisDetalles">  ${this.state.infoSerie.first_air_date}</span></p>
            <p>Temporadas:<span className="infoPelisDetalles">${this.state.infoSerie.number_of_seasons} </span></p>
            <p className="sinopsis">Sinopsis: </p>
            <span className="infoPelisDetalles">${this.state.infoSerie.overview}</span>
            <div className="proveedores"> <p>Donde mirar:</p></div>
            <p className="boton_favs boton_favoritos_serie">Agregar a favoritos</p>
           </article>
            </React.Fragment>            
        )
    }
}
export default DetalleSerie;
