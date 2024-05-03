# Proyecto React - Han'Ei Sushi

![Han'Ei Sushi](/public/img/logosushi.png)

## 1. Introducción

Este proyecto React, titulado "Han'Ei Sushi", es una aplicación web que presenta información sobre un restaurante ficticio de sushi. A continuación, se proporciona una guía paso a paso del desarrollo y la implementación de la aplicación.

## 2. Desarrollo Web Estático

### Prototipado Simple
Se inició el desarrollo con la creación de un prototipo simple que sirvió como base para la estructura general del sitio web.

### HTML Semántico (HTML5)
Se aplicaron principios de HTML5 para garantizar la semántica y estructura adecuadas en todo el sitio. Se utilizaron elementos HTML5 como `<header>`, `<nav>`, `<main>`, `<footer>`, etc., para mejorar la estructura del documento.

### Tipos de Selectores en CSS
En el archivo de estilos CSS, se utilizaron diversos tipos de selectores para aplicar estilos específicos a diferentes elementos.

### Sección Información del Restaurante
La sección "InformacionRestaurante" proporciona detalles sobre el restaurante, incluido su nombre, significado en japonés, y una descripción que destaca la filosofía del restaurante.

### Opcional: Sección de Reserva
La sección "FormularioContacto" permite a los usuarios realizar reservas de mesas proporcionando información como nombre, fecha y hora deseada.

## 3. React

### Uso de Props
Los componentes React utilizan props para la comunicación entre ellos. Por ejemplo, el componente "InformacionRestaurante" puede recibir datos dinámicos a través de props para personalizar su contenido.

### Uso de Hooks useState
El estado local de los componentes se gestiona utilizando el hook `useState`. En el componente "FormularioContacto", se utiliza `useState` para almacenar la información del formulario y gestionar su estado.

### Sección Información del Restaurante (React)
La sección "InformacionRestaurante" se implementa como un componente de React, aprovechando la modularidad y reutilización de código.

### Opcional: Sección de Reserva (React)
El componente "FormularioContacto" sirve como la sección de reserva, donde los usuarios pueden interactuar con el formulario para realizar reservas de mesas.

## 5. Dependencias instaladas
  ```
     npx create-vite my-react-app --template react
     npm install
  ```

## 5. Instrucciones de Ejecución

```bash
npm start
```

###Sabiendo esto, damos por finalizado nuestro proyecto react App Restaurant
