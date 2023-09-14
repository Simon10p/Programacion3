import React, { Component } from "react";
import MoviesCard from "../MovieCard/MoviesCard";
import SeriesCard from "../SeriesCard/SeriesCard";
import Filtro from "../Filtro/Filtro";

class ListaFavs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorita: [],
    };
  }
  componentDidMount() {
    let favoritos = [];
    let recuperoStorage = localStorage.getItem("favoritos");
    if (recuperoStorage !== null) {
      favoritos = JSON.parse(recuperoStorage);
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
    // lo de map que agregue no se si esta bien
  }

  render() {
    return (
      <section className="container_padre">
        {this.state.favorita.length === 0 ? (
          <p>No tiene favoritos guardados</p>
        ) : (
          <React.Fragment>
         <h1>Tus favoritos:</h1>
          <div>
            {this.state.favorita.map((unPelicula) => (
          <MoviesCard  key={unPelicula.id} datosPelicula={unPelicula.favorita} img={unPelicula.poster_path} />
            ))}
            </div> 
          </React.Fragment>       
        )}
      </section>
    );
  }
}

export default ListaFavs;
