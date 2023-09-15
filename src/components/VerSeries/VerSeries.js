import Filtro from "../../components/Filtro/Filtro";
import SeriesCard from "../../components/SeriesCard/SeriesCard";
import React, {Component} from "react";

class VerSeries extends Component{
    constructor(){
        super();
        this.state ={
            series : [],
            pagina : 1,
            idx: 5

        }
    }

    componentDidMount(){
        this.multimedia()
    }

    multimedia(){ 
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&page=1`)
        .then(response => response.json())
        .then(datos => this.setState(
            {
                series:this.state.series.concat(datos.results),
                pagina: this.state.pagina + 1
            }
        ))
        .catch(error => console.log(error))

    }

    filtrarSeries(textoFiltrado){
        let seriesFiltradas = this.state.series.filter(function(unaSerie){
            return unaSerie.name.includes(textoFiltrado)
        })

        this.setState({
            series: seriesFiltradas
        })
    }
    verMas(){
        this.setState({
            idx: this.state.idx + 5
        })
        this.multimedia()
    }

    render(){ 

        return(
            <section className="container_padre">
           
            {  this.state.series.length > 0? ( 
                <React.Fragment>
                     <h1>Todas las series</h1>
                     <Filtro filtrar={(texto) => this.filtrarSeries(texto)} />
            <button onClick={()=>this.verMas(this.state.series)} className="ver-mas-boton" > Ver más</button>
            <div className="contenedorTodas">
                {this.state.series.map((unaSerie, indice) => { 
                    if (indice < this.state.idx) {
                    return (
                        <SeriesCard key={unaSerie.id} datosSerie={unaSerie} img={unaSerie.poster_path} />
                    );
                }   
                return null; 
                })}
            </div>
                </React.Fragment>
               ) 
            : (
                <p>Problema: Error</p>
            )}
            </section>
        )
    }
}
            
export default VerSeries
    

