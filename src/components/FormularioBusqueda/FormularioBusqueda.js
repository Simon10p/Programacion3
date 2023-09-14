import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

class FormularioBusqueda extends Component{

    constructor(props){
        super(props);
        this.state ={
            textoDelInput: ''
        }
    }

    controlarEnvio(evento){
        evento.preventDefault();
    }

    guardarDatosDelInput(eventoEnElInput){
        this.setState({
            textoDelInput: eventoEnElInput.target.value
        })
        return true
    }

    render(){
        return(
              <div className="iBusqueda">
              <form className="busqueda"  method="GET" onSubmit={(event) => this.controlarEnvio(event)}>
                  <input className="" type="text" name="Search" placeholder="Ingrese Pelicula o serie" onChange={(e)=>this.guardarDatosDelInput(e)} value={this.state.textoDelInput}/> 
                  <Link to ={`/ResultadosBusqueda/${this.state.textoDelInput}`}> <button className="" type="submit">Search</button> </Link>
              </form>
          </div>
        )
    }

}

export default FormularioBusqueda