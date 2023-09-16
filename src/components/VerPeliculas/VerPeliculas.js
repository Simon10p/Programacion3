import Filtro from "../Filtro/Filtro";
import MovieCard from "../MovieCard/MoviesCard";
import React, { Component } from "react";

class VerPeliculas extends Component {
  constructor() {
    super();
    this.state = {
      peliculas: [],
      pagina: 1,
      idx: 5,
    };
  }

  componentDidMount() {
    this.multimedia();
  }

  multimedia() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&page=${this.state.pagina}`
    )
      .then((response) => response.json())
      .then((datos) =>
        this.setState({
          peliculas: this.state.peliculas.concat(datos.results),
          pagina: this.state.pagina + 1,
        })
      )
      .catch((error) => console.log(error));
  }

  filtrarPeliculas = (textoFiltrado) => {
    let peliculasFiltradas = this.state.peliculas.filter((unaPelicula) =>
      unaPelicula.original_title
        .toUpperCase()
        .includes(textoFiltrado.toUpperCase())
    );
    this.setState({
      peliculas: peliculasFiltradas,
    });
  };

  verMas() {
    this.setState({
      idx: this.state.idx + 5,
    });
    this.multimedia();
  }

  render() {
    return (
      <section className="container_padre">
        {this.state.peliculas.length > 0 ? (
          <React.Fragment>
            <h1>Todas las peliculas</h1>
            <Filtro filtrar={(texto) => this.filtrarPeliculas(texto)} />
            <button
              onClick={() => this.verMas(this.state.peliculas)}
              className="ver-mas-boton"
            >
              {" "}
              Ver más
            </button>
            <div className="contenedorTodas">
              {this.state.peliculas.map((unPelicula, indice) => {
                if (indice < this.state.idx) {
                  return (
                    <MovieCard
                      key={unPelicula.id}
                      datosPelicula={unPelicula}
                      img={unPelicula.poster_path}
                    />
                  );
                }
                return null;
              })}
            </div>
          </React.Fragment>
        ) : (
            <iframe
            src="https://giphy.com/embed/W22b2eea2XxB6DiTWg"
            width="280"
            height="280"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
        ></iframe>
        )}
      </section>
    );
  }
}

export default VerPeliculas;
