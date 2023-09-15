import React, { Component } from "react";
import MoviesCard from "../MovieCard/MoviesCard";
import SeriesCard from "../SeriesCard/SeriesCard";
import "../ListaFavs/ListaFavs.css"


class ListaFavs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritaPelicula: [],
      favoritaSerie: []
    };
  }
  
  componentDidMount() {
    let favoritosPelis = [];
    let favoritaSerie =[];
    let recuperoStorage = localStorage.getItem("favoritos");
    console.log(recuperoStorage);
    let recuperoStorageSeries = localStorage.getItem("favoritosSeries")
    if (recuperoStorage !== null && recuperoStorageSeries !== null) {
      favoritosPelis = JSON.parse(recuperoStorage);
      favoritaSerie = JSON.parse(recuperoStorageSeries)
      
    }
    console.log(favoritosPelis);
    favoritosPelis.map((id) => {
      
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US`
      )
        .then((response) => response.json())
        .then((favorita) => {   
          console.log(favorita)
          let listaFavoritos = this.state.favoritaPelicula;
          console.log(listaFavoritos);
          listaFavoritos.push(favorita);
          console.log(listaFavoritos);
          this.setState({ favoritaPelicula: listaFavoritos });
        })
        .catch(error => console.log(error));
    });


    favoritaSerie.map((idSerie) =>{
      fetch(
        `https://api.themoviedb.org/3/tv/${idSerie}?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-U`
      )
      .then((response) => response.json())
      .then((serieFavorita) => {
        let listaSeriesFavoritas = this.state.favoritaSerie;
        listaSeriesFavoritas.push(serieFavorita)
        this.setState({favoritaSerie:listaSeriesFavoritas})
      })
    })
   
  }

  render() {
    return (
      <section className="container_padre">
        {this.state.favoritaPelicula.length === 0 ? 
          <p>No tiene favoritos guardados</p>
         : 
          <React.Fragment>
         <h1>Tus peliculas favoritas:</h1>
          <div className="contenedorFavoritas">
            {this.state.favoritaPelicula.map((unPelicula) => (
          <MoviesCard  key={unPelicula.id} datosPelicula={unPelicula} img={unPelicula.poster_path} />
            ))}
            </div> 
            <h1>Tus series favoritas:</h1>
            <div className="contenedorFavoritas">
              {this.state.favoritaSerie.map((unSerie) => ( 
                <SeriesCard key={unSerie.id} datosSerie={unSerie} img={unSerie.poster_path}></SeriesCard>
               ))}
            </div>
          </React.Fragment>       
        }
      </section>
    );
  }
}

export default ListaFavs;
