import React from 'react';
import '../styles/Main.css';
import eliasPerfil from '../assets/elias_perfil.jpg';

const tecnologias = [
  {
    nombre: 'JavaScript',
    imagen: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    descripcion: 'Lenguaje de programación que da interactividad a la web.'
  },
//   {
//     nombre: 'JSX',
//     imagen: '../../public/img/icons8-js-file-64.png',
//     descripcion: 'Sintaxis que permite escribir HTML dentro de JavaScript en React.'
//   },
//   {
//     nombre: 'CSS',
//     imagen: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
//     descripcion: 'Lenguaje de estilos para diseñar páginas web.'
//   },
  {
    nombre: 'React',
    imagen: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    descripcion: 'Librería de JavaScript para construir interfaces de usuario.'
  },
  {
    nombre: 'react-router-dom',
    imagen: '../../public/img/rr_logo_light.svg',
    descripcion: 'Librería para manejar rutas en aplicaciones React.'
  },
  {
    nombre: 'useState',
    imagen: 'https://cdn-icons-png.flaticon.com/512/10391/10391004.png',
    descripcion: 'Hook que permite manejar estado en componentes funcionales.'
  },
  {
    nombre: 'useEffect',
    imagen: 'https://cdn-icons-png.flaticon.com/512/10391/10391016.png',
    descripcion: 'Hook que permite manejar efectos secundarios como fetch o timers.'
  }
];

function Main() {
  return (
    <main className="main-container">

      <section className="presentacion">
        <img src={eliasPerfil} alt="Foto de Elías Orihuela" className="foto-perfil animar-izq" />
        <div className="texto-presentacion animar-der">
            <h1>Hola, soy Elías Orihuela</h1>
            <h3>Estudiante de Talento Tech: React - Comisión 25021</h3>
            <p>Este proyecto es una tienda online con carrito de compras.</p>
            <p>Estoy empezando a dominar tecnologías como React, hooks (useState, useEffect), React Router y más.</p>
            <p>Todo esto lo aplico para construir interfaces interactivas, dinámicas y bien organizadas.</p>
        </div>
      </section>

      <h2 style={{ fontSize: "2em", margin: "1em 0" }}>Conocimientos que estoy aprendiendo</h2>

      <div className="cards-container">
        {tecnologias.map((tech) => (
          <div className="card" key={tech.nombre}>
            <img src={tech.imagen} alt={tech.nombre} className="card-image" />
            <h3>{tech.nombre}</h3>
            <p>{tech.descripcion}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;
