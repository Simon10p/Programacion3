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
        }
    }


// function SeriesCard(props) {
//      let SeriesCard = props.data.map(function(serie){
//     let path = serie.poster_path
//     let img = `https://image.tmdb.org/t/p/w500/${path}`
// })
// }
componentDidMount(){
    let recuperoStorage = localStorage.getItem('favoritos')
    if (recuperoStorage !== null){
      let favoritos = JSON.parse(recuperoStorage);
      if(favoritos.includes(this.props.key)){
         this.setState({
             textoBoton: "Quitar de favoritos"
         })
     }
    }
 }

ModificarFavoritos(id){
    let favoritos = [];
    favoritos.push(id);
    let favoritosString = JSON.stringify(favoritos);
    localStorage.setItem('favoritos', favoritosString)
    this.setState({
        textoBoton: "Quitar de favoritos"
    })

}



    render(){
        console.log(this.props.datosSerie)
        console.log("aca arriba")
        return(
                <article className = "container">
                    
                    <Link to={`/detalleSerie/${this.props.datosSerie.id}`} ><img src= {img + this.props.datosSerie.poster_path}  alt="Foto" className="foto-home" /></Link> 
                    <button onClick={()=>this.ModificarFavoritos(this.props.key)} type='button'>{this.state.textoBoton}</button>
                    <p> {this.props.datosSerie.name} </p>
                    <p>{this.props.datosSerie.overview}</p>
                </article>
                )
    }
}
export default SeriesCard