/* eslint-disable no-unused-vars */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import EquipoTalentoLab from './components/EquipoTalentoLab'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav'
import Video from './components/Video'
import TarjetaProyecto from './components/TarjetaProyecto'
import GaleriaIntereses from './components/GaleriaIntereses'

function App() {
  // const [count, setCount] = useState(0)
  const equipo = [
    { nombre: 'Silvia', rol: 'Product Owner', imagen: 'https://placehold.co/100' },
    { nombre: 'Luis', rol: 'Diseñador UX/UI', imagen: 'https://placehold.co/100' },
    { nombre: 'Matías', rol: 'Desarrollador', imagen: 'https://placehold.co/100' },
    { nombre: 'Sabrina', rol: 'Desarrolladora', imagen: 'https://placehold.co/100' },
  ];
  
  const videoData = {
    title: "Introducción a React",
    description: "Este video explica los fundamentos de React.",
    url: "https://youtu.be/lWQ69WX7-hA?si=K169llhV0tpbTQsP",
    thumbnail: "https://placehold.co/600x300?text=React+Video",
    count: 0
  };

  const intereses = ['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js'];

  return (
    <>
      <Header />
      <Nav />
      {/* <Main /> */}
      {/* <Gallery /> */}
      <EquipoTalentoLab equipo={equipo} />
      <TarjetaProyecto
        titulo="Plataforma de Gestión"
        descripcion="Una herramienta para optimizar la gestión de equipos."
        botonTexto="Explorar proyecto"
      />
      <GaleriaIntereses intereses={intereses} />
      <Footer />
      {/* <Video video={videoData} /> */}
    </>
  )
}

export default App
