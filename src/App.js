import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom/cjs/react-router-dom"
import Home from "./screens/Home/Home"
import Favoritos from "./screens/Favoritos/Favoritos"
import DetalleSerie from "./screens/Detalle/DetalleSerie"
import Busqueda from "./screens/Busqueda/Busqueda"
import VerSeries from "./screens/VerSeries/VerSeries"
import VerPeliculas from "./screens/VerPeliculas/VerPeliculas"
import NotFound from "../src/screens/NotFound/NotFound"
import Cargando from "../src/screens/Cargando/Cargando"
import DetallePelicula from "../src/screens/Detalle/DetallePelicula"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function App() {
  return (
  <React.Fragment>
    <Navbar />
<Switch>
<Route path="/" exact={true} component={Home} />
<Route path="/busqueda" component={Busqueda} />
<Route path="/verTodasPeliculas" component={VerPeliculas} />
<Route path="/verTodasSeries" component={VerSeries} />
<Route path="/detalleSerie/:id" component={DetalleSerie} />
<Route path="/detallePelicula/:id" component={DetallePelicula} />
<Route path="/favoritos" component={Favoritos} />
<Route path="/notFound" component={NotFound} />
<Route path="/cargando" component={Cargando} />
</Switch>
<Footer/>
  </React.Fragment>
  );
}

export default App;
