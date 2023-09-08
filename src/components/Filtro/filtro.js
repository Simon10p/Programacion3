import React, { Component } from 'react';

class Filtro extends Component{

    constructor(props){
        super(props);
        this.state ={
            textoIngresado: ''
        }
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
            <form action="" method='GET' onSubmit={(e) => this.controlarEnvio(e)}>
                <label htmlFor="">Texto a filtrar: </label>
                <input type="text" name='filtro' onChange={(e)=>this.guardarDatosDelInput(e)} value={this.state.textoIngresado} />
                <button type='submit'>Filtrar</button>
            </form>
        )
    }

}

export default Filtro
