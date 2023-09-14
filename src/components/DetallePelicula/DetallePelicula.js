import React, {Component} from "react";
import "./DetallePelicula.css"
let img = "https://image.tmdb.org/t/p/w500/"
class DetallePelicula extends Component{

    constructor(props){
        super(props)
        this.state ={
            textoBoton: "Agregar a favoritos",
            infoPelicula: []

        }
    }
    componentDidMount(){
   const id_pelicula = this.props.id
    let generos= []
    fetch(`https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US`)
        .then(response => response.json())
        .then(datos => 
            this.setState(
            {
                infoPelicula : datos,
                textoBoton: "Agregar a favoritos",
                genero: datos.genres.map((genero,idx)=> {
                   return( " " + genero.name + " ") 
                }
                
                )
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
        <img src={img + this.state.infoPelicula.poster_path} alt = "" className="fotoDetalle"/>
       <article className="infoPelisTitulos">
            <p>Rating: <span className="infoPelisDetalles">  {this.state.genero}</span></p> 
            <p>Año de estreno:  <span className="infoPelisDetalles">  {this.state.infoPelicula.release_date}</span></p>
            <p>Duración:<span className="infoPelisDetalles">{this.state.infoPelicula.runtime} </span></p>
            <p className="sinopsis">Sinopsis:</p>
            <span className="infoPelisDetalles">{this.state.infoPelicula.overview}</span>
            <button onClick={()=>this.ModificarFavoritos(this.props.key)} type='button'>{this.state.textoBoton}</button>
           </article>
            </section>            
        )
    }
}
export default DetallePelicula;

// <p class="sinopsis">Sinopsis:</p>
//<span class="infoPelisDetalles">${data.overview}</span>