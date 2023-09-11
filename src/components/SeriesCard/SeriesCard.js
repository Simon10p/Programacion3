import React, {Component} from 'react';

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
      if(favoritos.includes(this.props.data.id)){
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
        return(
            this.props.data.map(serie => {
                <article class = "container">
                    <a href="./detalle-pelis.html?movie_id=${id}">
                    <img src= {serie.img}  alt="Foto ${pelicula.original_title}" className="foto-home" /></a> //props .data o .serie?
                    <button onClick={()=>this.ModificarFavoritos(serie.id)} type='button'>{this.state.textoBoton}</button>
                    <p> {serie.original_title} </p>
                    <p>{serie.descripcion}</p>
                </article>
                })
        )
    }
}
export default SeriesCard