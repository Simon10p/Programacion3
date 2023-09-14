import Filtro from "../../components/Filtro/Filtro";
import ListaSeries from "../../components/ListaSeries/ListaSeries";
import React, {Component} from "react";

class VerSeries extends Component{
    constructor(){
        super();
        this.state ={
            series : []
        }
    }

    componentDidMount(){

    }

    filtrarSeries(textoFiltrado){
        let seriesFiltradas = this.state.series.filter(function(unPersonaje){
            return unPersonaje.name.includes(textoFiltrado)
        })

        this.setState({
            series: seriesFiltradas
        })
    }

    render(){ 
    return(
        <React.Fragment>
        <Filtro filtrar={(texto) => this.filtrarSeries(texto)} />
       <ListaSeries />
   </React.Fragment> 
    )
}}
export default VerSeries