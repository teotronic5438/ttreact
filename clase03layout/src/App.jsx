// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav'
import Video from './components/Video'

function App() {
  // const [count, setCount] = useState(0)

  const videoData = {
    title: "Introducción a React",
    description: "Este video explica los fundamentos de React.",
    url: "https://youtu.be/lWQ69WX7-hA?si=K169llhV0tpbTQsP",
    thumbnail: "https://placehold.co/600x300?text=React+Video",
    count: 0
  };

  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Gallery />
      <Footer />
      <Video video={videoData} />
    </>
  )
}

export default App
