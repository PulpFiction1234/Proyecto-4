import React, { useState } from 'react';
import InformacionRestaurante from './components/InformacionRestaurante';
import FormularioContacto from './components/FormularioContacto';
import MenuRestaurante from './components/MenuRestaurante';
import Blog from './components/Blog';
import './App.css';

const App = () => {
  const [reservas, setReservas] = useState([]);

  const handleReserva = (datosReserva) => {
    // Agregar una nueva reserva al array
    setReservas([...reservas, datosReserva]);
  };

  return (
    <div className='divbody'>
      <InformacionRestaurante />
      <MenuRestaurante />  
      <FormularioContacto onReserva={handleReserva} />
      {reservas.length > 0 && (
        <div>
          <h1>Reservas Confirmadas</h1>
          {reservas.map((reserva, index) => (
            <div key={index}>
              <p>Mesa reservada para {reserva.nombre} el {reserva.fecha} a las {reserva.hora}.</p>
            </div>
          ))}
        </div>
      )}
        <Blog />
    </div>
  );
};

export default App;
