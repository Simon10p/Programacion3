import React, {Component} from 'react';
import "./SeriesCards.css"
import { Link } from "react-router-dom";

let img = "https://image.tmdb.org/t/p/w500/"

class SeriesCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            textoBoton: "Agregar a favoritos",
            personajes : [],
            mas : false
        }
    }
    verMas(){
        this.setState({
            mas : true
        })
    }
    verMenos(){
        this.setState({
            mas : false
        })
    }
componentDidMount(){
    let recuperoStorage = localStorage.getItem('favoritosSeries')
    if (recuperoStorage !== null){
      let favoritosSeries = JSON.parse(recuperoStorage);
      if(favoritosSeries.includes(this.props.datosSerie.id)){
         this.setState({
             textoBoton: "Quitar de favoritos"
         })
     }
    }
 }

ModificarFavoritos(id){
    let favoritosSeries = [];
    let recuperoStorage = localStorage.getItem('favoritosSeries')
    if (recuperoStorage !== null){
         favoritosSeries = JSON.parse(recuperoStorage)
    }       
    if(favoritosSeries.includes(id)){
         favoritosSeries = favoritosSeries.filter(unId => unId !== id )
         this.setState({
             textoBoton: "Agregar a favoritos"
         })
    } else {
         favoritosSeries.push(id);
         this.setState({
             textoBoton: "Quitar de favoritos"
         })
    }

    let favoritosSeriesString = JSON.stringify(favoritosSeries);
         localStorage.setItem('favoritosSeries', favoritosSeriesString)

}
    render(){
        return(
                <article className = "container">
                    <Link to={`/detalleSerie/${this.props.datosSerie.id}`} ><img src= {img + this.props.datosSerie.poster_path}  alt="Foto" className="foto-home" /></Link> 
                    <p> {this.props.datosSerie.name} </p>
                    <button onClick={()=>this.ModificarFavoritos(this.props.datosSerie.id)} type='button'>{this.state.textoBoton}</button>
                    {
                this.state.mas === false ?
                (<button onClick={() => this.verMas()}>
                    Ver sinopsis
                </button>)
                :
                (<div>
                <p>{this.props.datosSerie.overview}</p>
                <button onClick={() => this.verMenos()}>Ver menos </button>
                </div> )      
            }
                </article>
                )
    }
}
export default SeriesCard
