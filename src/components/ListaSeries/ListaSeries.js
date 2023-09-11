import React, {Component} from "react";
import SeriesCard from "../SeriesCard/SeriesCard";
import Filtro from "../Filtro/Filtro";

class ListaSeries extends Component{
    constructor(props){
        super(props)
        this.state({
            data: []
        })
    }
    componentDidMount(){
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&page=1`)
        .then(response => response.json())
        .then(datos => this.setState(
            {data:datos}
        ))
        .catch(error => console.log(error))
    }
    filtrarSeries(textoAFiltrar){
            let SeriesFiltradas = this.state.data.filter(unSeries =>{
                return unSeries.name.includes(textoAFiltrar) //includes retorna TRUE o FALSE
            })
    
            this.setState({
                data: SeriesFiltradas,
            })
    
        }
    

    render(){
        console.log(this.state.data)
        return(
        <section className="container_padre"  >
            {this.state.data.length === 0 ?
              (<iframe src="https://giphy.com/embed/W22b2eea2XxB6DiTWg" width="280" height="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>)
            :(
            <div>
            <h1 id={this.state.data.title}> </h1>
            <div className={this.state.data.title}><SeriesCard data={this.state.data} /></div>
            </div>)}
            <Filtro filtrar={(texto) => this.filtrarSeries(texto)} />
                { 
                   this.state.data.map((unSerie) => {
                    <SeriesCard key={ unSerie.id } datosSerie={ unSerie }/>
                   })
                }
        </section>
        )
    }
}
export default ListaSeries;

