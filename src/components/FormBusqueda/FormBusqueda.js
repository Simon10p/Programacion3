import { Component } from "react";
import React from "react";
import "./FormBusqueda.css"

class FormBusqueda extends Component{
    constructor(props){
        super(props)
        this.state = {busqueda: " "}
    }

    evitarSubmit(event){
        event.PreventDefault()
    }

    controlarCambios(event){
        this.setState({busqueda: event.target.value})
    }

    render(){
        return(

            <form className="iBusqueda" onSubmit={(event)=>this.evitarSubmit(event)}>
                    <input
                        className="search"
                        type="search"
                        name="busqueda"
                        placeholder="Buscar"
                        value=""
                    />
                    <button type="submit">
                        <img src="./fotos/lupita.jpg" alt="" />
                    </button>
                </form>

        )
    }
}