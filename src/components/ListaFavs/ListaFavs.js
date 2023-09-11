import React, {Component} from 'react';
import "ListaFavs.css"

class ListaFavs extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let infoMultimedia = {}
        let recuperoStorage = localStorage.getItem('favoritos')
 
        if (recuperoStorage !== null){
          let favoritos = JSON.parse(recuperoStorage);
          
          if(favoritos.includes(this.props.data.id)){
             this.setState({
                 textoBoton: "Quitar de favoritos"
             })
         }
         fetch(`https://api.themoviedb.org/3/movie/popular?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&page=1`)
        .then(response => Response.json())
        .then(datos => this.setState(
            {
                data:datos,
            }
        ))
        .catch(error => console.log(error))
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