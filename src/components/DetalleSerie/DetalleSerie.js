import React, {Component} from "react";
import "./DetalleSerie.css"

let img = "https://image.tmdb.org/t/p/w500/"

class DetalleSerie extends Component{

    constructor(props){
        super(props)
        this.state ={
            infoSerie: [],
            textoBoton: "Agregar a favoritos"
        }
    }
    componentDidMount(){
    const id_serie = this.props.id
    fetch(`https://api.themoviedb.org/3/tv/${id_serie}?api_key=0c5fb97f0c55576b638b49d73fa8d73e&language=en-US`)
        .then(response => response.json())
        .then(datos => this.setState(
            {
                infoSerie:datos,
                genero: datos.genres.map((genero,idx)=> {
                    return( " " + genero.name + " ") 
                 })
            }
        )
        )
        .catch(error => console.log(error))
    }
    ModificarFavoritos(id){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')
       if (recuperoStorage !== null){
            favoritos = JSON.parse(recuperoStorage)
       }       
       if(favoritos.includes(id)){
            favoritos = favoritos.filter(unId => unId !== id )
            this.setState({
                textoBoton: "Agregar a favoritos"
            })
       } else {
            favoritos.push(id);
            this.setState({
                textoBoton: "Quitar de favoritos"
            })
       }

       let favoritosString = JSON.stringify(favoritos);
            localStorage.setItem('favoritos', favoritosString)
    }

    render(){
        return(
            <section className="detallepelis">
        <img src={img + this.state.infoSerie.poster_path} alt = "" className="fotoDetalle"/>
       <article className="infoPelisTitulos">
            <p>Rating: <span className="infoPelisDetalles">  {this.state.infoSerie.vote_average} </span></p>
            <p className="generos">Genero: <span className="infoPelisDetalles">  {this.state.genero}</span></p>
            <p>Año de estreno:  <span className="infoPelisDetalles">  {this.state.infoSerie.first_air_date}</span></p>
            <p>Temporadas:<span className="infoPelisDetalles">{this.state.infoSerie.number_of_seasons} </span></p>
            <p className="sinopsis">Sinopsis: </p>
            <span className="infoPelisDetalles">{this.state.infoSerie.overview}</span>
            <div className="proveedores"> <p>Donde mirar:</p></div>
            <button onClick={()=>this.ModificarFavoritos(this.props.key)} type='button'>{this.state.textoBoton}</button>
           </article>     
           </section>      
        )
    }
}
export default DetalleSerie;
