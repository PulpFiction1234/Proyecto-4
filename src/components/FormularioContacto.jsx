import React, { useState } from 'react';
import styles from './FormularioContacto.module.css'


const FormularioContacto = ({ onReserva }) => {
  const [datosReserva, setDatosReserva] = useState({
    nombre: '',
    fecha: '',
    hora: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosReserva((prevDatos) => ({
      ...prevDatos,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Puedes realizar validaciones adicionales aquí antes de enviar los datos
    onReserva(datosReserva);
  };

  return (
    <div className={styles['formulario-contacto']}>
      <h1>Reserva de Mesa</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="nombre" value={datosReserva.nombre} onChange={handleChange} />
        </label>
        <label>
          Fecha:
          <input type="date" name="fecha" value={datosReserva.fecha} onChange={handleChange} />
        </label>
        <label>
          Hora:
          <input type="time" name="hora" value={datosReserva.hora} onChange={handleChange} />
        </label>
        <button type="submit">Reservar Mesa</button>
      </form>
    </div>
  );
};

export default FormularioContacto;