import React, { Component } from "react";
import MoviesCard from "../MovieCard/MoviesCard";

class ResultadosBusqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchResults:[]
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.busquedaUsuario}&api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=1&include_adult=false`)
            .then(response => response.json())
            .then(data => this.setState(
                { searchResults: data.results }
            ))
            .catch(error => console.log(error))
  }
  render(){
    console.log(this.props.resultadosBusqueda, "aca el nombre de la busqueda")
    return(
        <section className="container_padre">
        {this.state.searchResults.length === 0 ? (
          <p>No existen resultados para tu busqueda: {this.props.busquedaUsuario} </p>
        ) : (
          <React.Fragment>
            <h1>Peliculas:</h1>
          <div>
            {this.state.searchResults.map((unPelicula) => (
          <MoviesCard  key={unPelicula.id} datosPelicula={unPelicula} img={unPelicula.poster_path} />
            ))}
            </div> 
          </React.Fragment>       
        )}
      </section>

    )
  }

}
export default ResultadosBusqueda