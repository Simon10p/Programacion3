import React, {Component} from 'react';
import MovieCard from '../MovieCard/MoviesCard';
import "ListaFavs.css"

class ListaFavs extends Component {
    constructor(props){
        super(props);
        this.state = {
            Favs: []
        }
    }

    componentDidMount(){
        let infoMultimedia = {}
        let recuperoStorage = localStorage.getItem('favoritos')
 
        if (recuperoStorage !== null){
          let favoritos = JSON.parse(recuperoStorage);
          infoMultimedia = favoritos
          
          if(favoritos.includes(this.props.data.id)){
             this.setState({
                 textoBoton: "Quitar de favoritos"
             })
         
             

             favoritos.map((id) => {
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&language=es-ES`)
                .then(response => response.json())
                .then( Favs => { 
                    let listaFavoritos = this.state.Favsavs;
                    listaFavoritos.push(Favs);
                    this.setState({Favs: listaFavoritos});
                } )
                .catch( error => console.log(error) )
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

       // hacer un if o map o filter (?) comparando la lista de la API de peliculas o series con los ids de la lista de favoritos
       // Mostrar solo la data de las peliculas favoritas --> Como hago esto?
       
    }
    

    render(){
        return(
            <section className="container_padre"  >
            {this.state.data === ""?
              <iframe src="https://giphy.com/embed/W22b2eea2XxB6DiTWg" width="280" height="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            :
            <div>
            <h1 id={this.state.data.title}> </h1>
            <div><MovieCard data={this.state.data} /></div>
            </div>}

            <Filtro filtrar={(texto) => this.filtrarPeliculas(texto)} />
                { 
                   this.state.data.map(function(unPelicula){
                    return <MoviesCard key={ unPelicula.id } datosPelicula={ unPelicula }/>
                   })
                }
        </section>
        )
    }
}

export default ListaFavs;