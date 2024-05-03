/* import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css'; 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
 
// Renderiza la aplicación en el elemento con ID 'root'
const rootElement = document.getElementById('root');
 
if (!rootElement) {
  throw new Error("El elemento con ID 'root' no existe en el DOM.");
}
 
ReactDOM.hydrate(
<React.StrictMode>
    {/* Comentarios explicativos */}
    {/* El componente App es el componente principal de la aplicación */}
    {/* StrictMode activa verificaciones adicionales y advertencias en el modo de desarrollo */}
<App />
</React.StrictMode>,
  rootElement
);