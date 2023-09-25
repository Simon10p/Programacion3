import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
//se importa los componentes desestructurados

import Home from "./screens/Home/Home";
import Favoritos from "./screens/Favoritos/Favoritos";
import DetalleSerie from "./screens/Detalle/DetalleSerie";
import Busqueda from "./screens/Busqueda/Busqueda";
import VerSeries from "./screens/VerSeries/VerSeries";
import VerPeliculas from "./screens/VerPeliculas/VerPeliculas";
import NotFound from "../src/screens/NotFound/NotFound";
import Cargando from "../src/screens/Cargando/Cargando";
import DetallePelicula from "../src/screens/Detalle/DetallePelicula";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//estamos trayendo todas las screens y componentes para crear la estructura de nuestra pagina en app, que es el componente principal

function App() {
  return (

//route recibe los atributos path y component, nos ayudan a configurar que componentes se deben renderizar -->
//dependiendo de la ruta a la que acceda el cliente desde la barra del navegador
//en path escribimos la ruta que debera ingresar el cliente en la barra o bien la ruta de un link para llevar a una pagina especifico
//component recibe el componente a renderizar para la ruta esepcificada en el path
//Route tambien recibe un atributo exact, para que ReactRouterDom encuentre exactamente el valor en path y no alguno parecido
    <React.Fragment>
      <Navbar />

      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/ResultadosBusqueda/:userImput" component={Busqueda} />
        <Route path="/verTodasPeliculas" component={VerPeliculas} />
        <Route path="/verTodasSeries" component={VerSeries} />
        <Route path="/detalleSerie/:id" component={DetalleSerie} />
        <Route path="/detallePelicula/:id" component={DetallePelicula} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/cargando" component={Cargando} />
        <Route path="" component={NotFound} />
      </Switch>

      <Footer />
    </React.Fragment>

//switch verifica que las rutas ingresadas desde el navegador coincidan con las rutas declaradas en la app.

//al final de todo se agrega un componetnte sin esepcificar una ruta que de un aviso de notFound
//si switch no conoce la ruta ingresada por el usuario va a renderizzar este ultimo.
  );
}

export default App;
// App.js sera el componente principal de la aplicacion en react
// El archivo App.js que es llamado en el render de index.js contiene la estructura que se termina viendo en el navegador
// entonces, App.js es donde generamos la estructura de la aplicacion y tambien es el componente principal.
