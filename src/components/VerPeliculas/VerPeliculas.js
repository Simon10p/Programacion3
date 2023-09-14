import Filtro from "../Filtro/Filtro";
import ListaPeliculas from "../ListaPeliculas/ListaPeliculas";
import React, {Component} from "react";

class VerPeliculas extends Component{
    constructor(){
        super();
        this.state ={
            peliculas : []
        }
    }

    componentDidMount(){

    }

    filtrarPeliculas(textoFiltrado){
        let peliculasFiltradas = this.state.peliculas.filter(function(unaPelicula){
            return unaPelicula.name.includes(textoFiltrado)
        })

        this.setState({
            peliculas: peliculasFiltradas
        })
    }

    render(){ 
    return(
        <React.Fragment>
        <Filtro filtrar={(texto) => this.filtrarPeliculas(texto)} />
       <ListaPeliculas />
   </React.Fragment> 
    )
}}
export default VerPeliculas