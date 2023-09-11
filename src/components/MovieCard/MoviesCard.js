import React, {Component} from 'react';
import "./MoviesCard.css"
import Link from "react-router-dom/cjs/react-router-dom"
// falta linkear al detalle

let img = "https://image.tmdb.org/t/p/w500/"


class MovieCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            textoBoton: "Agregar a favoritos",
            personajes : [],
        }
    }

    componentDidMount(){
       let recuperoStorage = localStorage.getItem('favoritos')

       if (recuperoStorage !== null){
         let favoritos = JSON.parse(recuperoStorage);
         
         if(favoritos.includes(this.props.data.id)){
            this.setState({
                textoBoton: "Quitar de favoritos"
            })
        }
       }
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
        console.log(this.props.datosPelicula)
        console.log("acaaaaaaa")
      
    return(
        <div>
            <article className = "container">
        <Link to ={`/detalle/${this.props.key}`}><img src= {img + this.props.img} alt={this.props.datosPelicula.title} className="foto-home" /></Link>
        <button onClick={()=>this.ModificarDeFavoritos(this.props.key)} type='button'>{this.state.textoBoton}</button>
        <p> {this.props.datosPelicula.title} </p>
        <p>{this.props.datosPelicula.overview}</p>
            </article>
        </div>
  
    )
}
}
export default MovieCard


//     let img = `https://image.tmdb.org/t/p/w500/${path}`