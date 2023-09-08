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
            {
                data:datos,
            }
        ))
        .catch(error => console.log(error))
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
        </section>
        )
    }
}
export default ListaPelicula;

