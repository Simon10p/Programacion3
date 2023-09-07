import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom/cjs/react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Home from "./screens/Home/Home"
import Favoritos from "./screens/Favoritos/Favoritos"
import Detalle from "./screens/Detalle/Detalle"
import Busqueda from "./screens/Busqueda/Busqueda"
import VerSeries from "./screens/VerSeries/VerSeries"
import VerPeliculas from "./screens/VerPeliculas/VerPeliculas"


function App() {
  return (
  <React.Fragment>
    <Navbar />
<Switch>

<Route path="/" exact={true} component={Home} />
<Route path="/busqueda" component={Busqueda} />
<Route path="/verTodasPeliculas" component={VerPeliculas} />
<Route path="/verTodasSeries" component={VerSeries} />
<Route path="/detalle/:id" component={Detalle} />
<Route path="/favoritos" component={Favoritos} />
<Route path="/notFound" component={NotFound} />

</Switch>
  </React.Fragment>
  );
}

export default App;
