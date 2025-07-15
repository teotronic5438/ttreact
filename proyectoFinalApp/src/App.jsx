// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
// import Header from './components/Header';
// import Nav from './components/NavBar';
import Home from './pages/Home';
import Productos from './pages/Productos';
import CarritoPage from './pages/CarritoPage';
import ProductoDetalle from './pages/ProductoDetalle';
import Contacto from './pages/Contacto';
import About from './pages/About';
import Login from './pages/Login';
import RutaAdminProtegida from './components/RutaAdminProtegida';
import RutaProtegidaCarrito from './components/RutaProtegidaCarrito';
import FormularioProducto from './components/FormularioProducto';
import RutaAgregarProtegido from './components/RutaAgregarProtegido';
import RutaAgregarFirebase from './components/RutaAgregarFirebase';
import FormularioEdicion from './components/FormularioEdicion';
import FormularioEdicionFirebase from './components/FormularioEdicionFirebase';
import NavBar from './components/NavBar';


function App() {

  // defino la funcion que conectara a la api
  // Y recibe el productio como parametro de la funcion
  // const agregarProducto = async (producto) => {
  //   try {
  //     const respuesta = await fetch('https://68150b27225ff1af162af909.mockapi.io/productos', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(producto),
  //     });

  //     // si la respuesta no esta OK da un error
  //     if (!respuesta.ok) {
  //       throw new Error('Error al agregar el producto.');
  //     }
  //     const data = await respuesta.json();
  //     console.log('Producto agregado:', data);
  //     alert('Producto agregado correctamente');
  //   } catch (error) {
  //     console.error(error.message);
  //     alert('Hubo un problema al agregar el producto.');
  //   }
  // };

  return (
    <div className="app-container">
      <Router>
          {/* <Header /> */}
          <NavBar />
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
              {/* <Route path='/admin/agregarProductos' element={<FormularioProducto />} /> */}
              <Route path='/admin/agregarProductos' element={<RutaAgregarProtegido />} />
              <Route path='/admin/agregarProductoFirebase' element={<RutaAgregarFirebase />} />
              <Route path='admin/editarProducto/:id' element={<FormularioEdicion />} />
              <Route path='/admin/editarProductoFirebase/:id' element={<FormularioEdicionFirebase />} />
              <Route path='*' element={<h1>404 - Página no encontrada</h1>} />

            </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;

