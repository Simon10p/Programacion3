import React, {Component} from "react";
import SeriesCard from "../SeriesCard/SeriesCard";
import "./ListaSeries.css";
import { Link } from  'react-router-dom';

class ListaSeries extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount(){
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&page=1`)
        .then(response => response.json())
        .then(datos => this.setState(
            {data:datos.results}
        ))
        .catch(error => console.log(error))
    }
    filtrarSeries(textoAFiltrar){
            let SeriesFiltradas = this.state.data.filter(unSeries =>{
                return unSeries.name.includes(textoAFiltrar) 
            })
    
            this.setState({
                data: SeriesFiltradas,
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
                            <h1>Series mas valoradas</h1>
                            <Link to={`/verTodasSeries`}><p className="linkVerMas">Ver todas las series mas valoradas</p></Link>
                     
                            </div>
                             
                        <div>
                            {this.state.data.map((unSerie, idx) => {
                                if(idx<5){
                                    return(<SeriesCard key={unSerie.id} datosSerie={unSerie} img={unSerie.poster_path} />)
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
export default ListaSeries;

