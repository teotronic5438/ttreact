import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Carrito from './pages/Carrito';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // bajando
        setShowHeader(false);
      } else {
        // subiendo
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="app-container">
      <Router>
        <div className={`header-nav-wrapper ${!showHeader ? 'header-hidden' : ''}`}>
          <Header />
          <Nav />
        </div>

        <div className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/contacto' element={<Contacto />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

