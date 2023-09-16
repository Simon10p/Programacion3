import React, { Component } from "react";
import "./Filtro.css";

class Filtro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoIngresado: "",
    };
  }

  controlarEnvio(evento) {
    evento.preventDefault();
    this.props.filtrar(this.state.textoIngresado);
  }

  guardarDatosDelInput(eventoEnElInput) {
    this.setState(
      {
        textoIngresado: eventoEnElInput.target.value,
      },
    );
  }

  render() {
    return (
      <div className="formsBusqueda">
        <form onSubmit={(evento) => this.controlarEnvio(evento)}>
          <label htmlFor="">Texto a filtrar: </label>
          <input
            type="text"
            name="filtro"
            placeholder="texto a filtrar"
            onChange={(e) => this.guardarDatosDelInput(e)}
            value={this.state.textoIngresado}
          />
          <button type="submit" value="submit">Filtrar</button>
        </form>
      </div>
    );
  }
}

export default Filtro;
