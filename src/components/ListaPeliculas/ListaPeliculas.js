import React, {Component} from "react";
import MovieCard from "../MovieCard/MoviesCard"


class ListaPelicula extends Component{
    constructor(props){
        super(props)
        this.state({
            data: ""
        })
    }
    componentDidMount(){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&page=1`)
        .then(response => Response.json())
        .then(datos => this.setState(
            {data:datos}
        ))
        .catch(error => console.log(error))
    }
    render(){
        <section className="container_padre"  >
        <h1 id={this.state.data.title}> </h1>
        <div className={this.state.data.title}><MovieCard data={data} />    </div>
            <Filtro filtrar={(texto) => this.filtrarSeries(texto)}
        
                // this.state.data.map(function(unaSerie){
                //      return <MovieCard key={ unPersonaje.id } datosPersonaje={ unPersonaje }/>
                //     })
                 />
        </section>
    }
}
export default ListaPelicula;

