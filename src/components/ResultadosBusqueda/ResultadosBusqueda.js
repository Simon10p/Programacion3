import React, { Component } from "react";
import MoviesCard from "../MovieCard/MoviesCard";
import SeriesCard from "../SeriesCard/SeriesCard";

class ResultadosBusqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
        movieResults:[],
        TVResults:[]
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.busquedaUsuario}&api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=1&include_adult=false`)
            .then(response => response.json())
            .then(data => {
             this.setState({ movieResults: data.results });
            })
            .catch(error => console.log(error))

    fetch(`https://api.themoviedb.org/3/search/tv?query=${this.props.busquedaUsuario}&api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=1&include_adult=false`)
            .then(response => response.json())
            .then(data => {
             this.setState({ TVResults: data.results });
            })
            .catch(error => console.log(error))
  }
  render(){
    console.log(this.props.resultadosBusqueda, "aca el nombre de la busqueda")
    return(
      <React.Fragment>
        <section className="container_padre">
        {this.state.movieResults.length === 0 ? (
          <p>No hay peliculas que coincidan con tu busqueda: {this.props.busquedaUsuario} </p>
        ) : (
          <div>
            <h1>Peliculas:</h1>
            <div>
              {this.state.movieResults.map((unPelicula) => (
              <MoviesCard  key={unPelicula.id} datosPelicula={unPelicula} img={unPelicula.poster_path} />
            ))}
            </div> 
          </div>   
          
          
        )}
      </section>

      <section className="container_padre">
        {this.state.TVResults.length === 0 ? (
          <p>No hay series que conincidan con tu busqueda: {this.props.busquedaUsuario} </p>
        ) : (
          <div>
            <h1>Series:</h1>
            <div>
              {this.state.TVResults.map((unSerie) => (
              <SeriesCard key={unSerie.id} datosSerie={unSerie} img={unSerie.poster_path} />
            ))}
            </div> 
          </div>   
          
          
        )}
      </section>
      </React.Fragment>

    )
  }

}
export default ResultadosBusqueda