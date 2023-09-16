import React, {Component} from "react";
import MovieCard from "../MovieCard/MoviesCard"
import "../ListaPeliculas/ListaPeliculas.css"
import { Link } from  'react-router-dom';

class ListaPelicula extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount(){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&page=1`)
        .then(response => response.json())
        .then(datos => this.setState(
            {
                data:datos.results,
            }
        ))
        .catch(error => console.log(error))
    }
    filtrarPeliculas(textoAFiltrar){
        let PeliculasFiltradas = this.state.data.filter(unPelicula => {
            return unPelicula.name.includes(textoAFiltrar) //includes retorna TRUE o FALSE
        })

        this.setState({
            data: PeliculasFiltradas,
        })

    }

    render() {
        
        return (
            <section className="container_padre">
                {this.state.data.length === 0 ? (
                    <iframe
                        src="https://giphy.com/embed/W22b2eea2XxB6DiTWg"
                        width="280"
                        height="280"
                        frameBorder="0"
                        className="giphy-embed"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <React.Fragment>
                        <div className="tituloLink">
                        <h1>Peliculas mas valoradas</h1>
                        <Link to={`/verTodasPeliculas`}><p className="linkVerMas">Ver todas las peliculas mas valoradas</p></Link>
                        </div>
                    <div> 
                        {this.state.data.map((unPelicula, idx) => {
                            console.log(unPelicula);
                         if (idx<5){
                            return( <MovieCard key={unPelicula.id} datosPelicula={unPelicula} img={unPelicula.poster_path} />)
                         }
                        } 
                        )}
                    </div>
                    </React.Fragment>
                    
                )}
            </section>
        );
    }
    
}
export default ListaPelicula;

