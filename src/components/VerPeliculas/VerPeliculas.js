import Filtro from "../Filtro/Filtro";
import MovieCard from "../MovieCard/MoviesCard";
import React, {Component} from "react";


class VerPeliculas extends Component{
    constructor(){
        super();
        this.state ={
            peliculas : [],
            pagina : 1,
            idx: 5

        }
    }

    componentDidMount(){
        this.multimedia()
    }

    multimedia(){ 
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&page=1`)
        .then(response => response.json())
        .then(datos => this.setState(
            {
                peliculas:this.state.peliculas.concat(datos.results),
                pagina: this.state.pagina + 1
            }
        ))
        .catch(error => console.log(error))

    }

    filtrarPeliculas(textoFiltrado){
        let peliculasFiltradas = this.state.peliculas.filter(function(unaPelicula){
            return unaPelicula.original_title.includes(textoFiltrado)
        })

        this.setState({
            peliculas: peliculasFiltradas
        })
        console.log(this.state.peliculasFiltradas);
    }
    verMas(){
        this.setState({
            idx: this.state.idx + 5
        })
        this.multimedia()
    }
    render(){ 
        
        return(
            <React.Fragment>
            <Filtro filtrar={(texto) => this.filtrarPeliculas(texto)} />
            {  this.state.peliculas.length > 0? ( 
            <section>
                {this.state.peliculas.map((unPelicula, indice) => { 
                    if (indice < this.state.idx) {
                    return (
                        <MovieCard key={unPelicula.id} datosPelicula={unPelicula} img={unPelicula.poster_path} />
                    );
                }   
                return null; 
                })}
                <button onClick={()=>this.verMas(this.state.peliculas)} className="boton" > Ver más</button>
            </section>) 
            : (
                <p>Problema: Error</p>
            )}
            </React.Fragment>
        )
    }
}
    

   
export default VerPeliculas