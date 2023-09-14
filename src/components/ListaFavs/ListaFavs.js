import React, { Component } from "react";
import MoviesCard from "../MovieCard/MoviesCard";
import SeriesCard from "../SeriesCard/SeriesCard";
import Filtro from "../Filtro/Filtro";

class ListaFavs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorita: [],
      favoritaSerie: []
    };
  }
  componentDidMount() {
    let favoritos = [];
    let favoritaSerie =[];
    let recuperoStorage = localStorage.getItem("favoritos");
    let recuperoStorageSeries = localStorage.getItem("favoritosSeries")
    if (recuperoStorage !== null && recuperoStorageSeries !== null) {
      favoritos = JSON.parse(recuperoStorage);
      favoritaSerie = JSON.parse(recuperoStorageSeries)
    }
    favoritos.map((id) => {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US`
      )
        .then((response) => response.json())
        .then((favorita) => {   
          let listaFavoritos = this.state.favorita;
          listaFavoritos.push(favorita);
          this.setState({ favorita: listaFavoritos });
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
        {this.state.favorita.length === 0 ? 
          <p>No tiene favoritos guardados</p>
         : 
          <React.Fragment>
         <h1>Tus peliculas favoritos:</h1>
          <div>
            {this.state.favorita.map((unPelicula) => (
          <MoviesCard  key={unPelicula.id} datosPelicula={unPelicula} img={unPelicula.poster_path} />
            ))}
            </div> 
            <h1>Tus series favoritas:</h1>
            <div>
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
