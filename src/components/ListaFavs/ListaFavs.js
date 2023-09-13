import React, {Component} from 'react';
import MovieCard from '../MovieCard/MoviesCard';
import SeriesCard from '../SeriesCard/SeriesCard';
import "ListaFavs.css"

class ListaFavs extends Component {
    constructor(props){
        super(props);
        this.state = {
            Favs: []
        }
    }

    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')
 
    if (recuperoStorage !== null){
          let pasarArray = JSON.parse(recuperoStorage);
          favoritos = pasarArray
    }
        favoritos.map((id) => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US`)
        .then(response => response.json())
        .then( Favs => { 
            let listaFavoritos = this.state.Favs;
            listaFavoritos.push(Favs);
            this.setState({Favs: listaFavoritos});
        } )
        .catch( error => console.log(error) )
        }) 
        // lo de map que agregue no se si esta bien 
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