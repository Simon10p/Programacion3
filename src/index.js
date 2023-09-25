import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
//ReactDOM es una librería en React que se utiliza para interactuar con el DOM (Documento Object Model)
//La función createRoot() se utiliza para crear una raíz de renderización en la que se montarán
//y renderizarán los componentes React. En este caso, estás pasando como argumento el elemento DOM que tiene el id "root". 
//Esto significa que todos los componentes React que crees posteriormente se renderizarán en este elemento del DOM
root.render(
  //browser router es el enrutador general y necesario para administrar las rutas del proyecto, es la envolutra del enrutamiento
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // app es el componente principal de la pagina, es lo que se ve en el navegador
);

// index.js es el encargado de renderizar el contenido principal
// index.js captura al elemento con id root de index.html y utiliza el metodo render() para enviarle "algo" al HTML
// notese que en el render app esta escrito en jsx
// entonces, index.js se encarga de enviarle la estructura de la aplicacion en React