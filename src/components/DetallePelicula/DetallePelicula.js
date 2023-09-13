import React, {Component} from "react";
import "./DetallePelicula.css"
let img = "https://image.tmdb.org/t/p/w500/"
class DetallePelicula extends Component{

    constructor(props){
        super(props)
        this.state ={
            infoPelicula: []

        }
    }
    componentDidMount(){
   const id_pelicula = this.props.id

    fetch(`https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US`)
        .then(response => response.json())
        .then(datos => 
            this.setState(
            {
                infoPelicula : datos,
            }
        )
        )
        .catch(error => console.log(error))
    }
    render(){
        return(
            <React.Fragment>
        <img src={img + this.state.infoPelicula.poster_path} alt = "" className="fotoDetalle"/>
       <article className="infoPelisTitulos">
            <p>Rating: <span className="infoPelisDetalles">  {this.state.infoPelicula.vote_average} </span></p>
            <p className="generos">Genero: </p>
            <p>Año de estreno:  <span className="infoPelisDetalles">  {this.state.infoPelicula.release_date}</span></p>
            <p>Duración:<span className="infoPelisDetalles">{this.state.infoPelicula.runtime} </span></p>
            <p className="sinopsis">Sinopsis: </p>
            <span className="infoPelisDetalles">{this.state.infoPelicula.overview}</span>
            <div className="proveedores"> <p>Donde mirar:</p></div>
            <p className="boton_favs boton_favoritos_serie">Agregar a favoritos</p>
           </article>
            </React.Fragment>            
        )
    }
}
export default DetallePelicula;
