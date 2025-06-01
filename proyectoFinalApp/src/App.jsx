// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Productos from './pages/Productos';
import CarritoPage from './pages/CarritoPage';
import ProductoDetalle from './pages/ProductoDetalle';
import Contacto from './pages/Contacto';
import About from './pages/About';
import Login from './pages/Login';
import RutaAdminProtegida from './components/RutaAdminProtegida';
import RutaProtegidaCarrito from './components/RutaProtegidaCarrito'; // ajustá la ruta


function App() {
  // const [usuarioLogeado, setUsuarioLogeado] = useState(false);
  // const [adminLogeado, setAdminLogeado] = useState(false);
  

  // function manejarAdmin() {
  //   setAdminLogeado(!adminLogeado);
  // }

  // function manejarUsuarioLogeado() {
  //   setUsuarioLogeado(!usuarioLogeado);
  // }

  return (
    <div className="app-container">
      <Router>
          <Header />
          <Nav />
          <div className="main-content">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/productos' element={<Productos />} />
              <Route path="/productos/:id" element={<ProductoDetalle />} />
              <Route
                path='/carrito'
                element={
                  <RutaProtegidaCarrito />
                }
              />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/about' element={<About />} />
              {/* <Route path='/login' element={<Login user={usuarioLogeado} admin={adminLogeado} setLogeadoAdmin={manejarAdmin} setUsuarioLogeado={manejarUsuarioLogeado}/>} /> */}
              <Route path='/login' element={<Login />} />
              {/* <Route path='/admin' element={<RutaAdminProtegida adminLogeado={adminLogeado} />} /> */}
              <Route path='/admin' element={<RutaAdminProtegida />} />
              <Route path='*' element={<h1>404 - Página no encontrada</h1>} />
            </Routes>
          </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

