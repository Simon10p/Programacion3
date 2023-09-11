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
        console.log(this.props.datosSerie)
        console.log("aca arriba")
        return(
                <article class = "container">
                    <a href="./detalle-pelis.html?movie_id=${id}">
                    <img src= {this.props.datosSerie.poster_path}  alt="Foto" className="foto-home" /></a> 
                    <button onClick={()=>this.ModificarFavoritos(this.props.key)} type='button'>{this.state.textoBoton}</button>
                    <p> {this.props.datosSerie.name} </p>
                    <p>{this.props.datosSerie.overview}</p>
                </article>
                )
    }
}
export default SeriesCard