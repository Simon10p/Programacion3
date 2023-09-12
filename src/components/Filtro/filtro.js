import React, { Component } from 'react';
import "./Filtro.css"

class Filtro extends Component{

    constructor(props){
        super(props);
        this.state ={
            textoIngresado: ''
        }
    }

    controlarEnvio(evento) {
        evento.preventDefault();
        console.log("No me mandé");
        return true
    }

    guardarDatosDelInput(eventoEnElInput){
        this.setState({
            textoIngresado: eventoEnElInput.target.value
        }, () => this.props.filtrar(this.state.textoIngresado))

     console.log(this.state.textoIngresado);

        return true
    }


render(){
        // console.log(this.props);
        return(
            <div className="formsBusqueda">
            <form action="" method='GET' onSubmit={(e) => this.controlarEnvio(e)}>
                <input type="text" name='filtro' placeholder="que queres filtrar?" onChange={(e)=>this.guardarDatosDelInput(e)} value={this.state.textoIngresado} />
                <button type='submit'>Filtrar</button>
            </form>
            </div>
        )
    }

}

export default Filtro
