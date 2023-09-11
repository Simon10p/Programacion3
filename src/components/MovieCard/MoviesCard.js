import React, {Component} from 'react';
// falta linkear al detalle


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
            <article class = "container">
        <img src="" alt={this.props.datosPelicula.title} className="foto-home" />
        <button onClick={()=>this.ModificarDeFavoritos(this.props.key)} type='button'>{this.state.textoBoton}</button>
        <p> {this.props.datosPelicula.title} </p>
        <p>{this.props.datosPelicula.descripcion}</p>
            </article>
        </div>
  
    )
}
}
export default MovieCard


//     let img = `https://image.tmdb.org/t/p/w500/${path}`