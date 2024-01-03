import React from 'react';
import styles from './InformacionRestaurante.module.css';

const InformacionRestaurante = () => {
  return (
    <div className={styles['informacion-restaurante']}>
      <div>      
      <img src="/img/logosushi.png" alt="" />
      <h1>Han'Ei Sushi</h1>
      </div>
      <p>Del japonés; significa prosperidad.</p>
      <p>Esta palabra se asocia a muchos aspectos positivos, pero principalmente a la felicidad. y es lo que buscamos entregarte con nuestros servicios.</p>
      <p>Ser felices y prósperos mientras compartimos con quienes queremos y con la comida que mas nos gusta</p>
    </div>
  );
};

export default InformacionRestaurante;