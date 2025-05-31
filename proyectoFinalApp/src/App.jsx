import { useState } from 'react';
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
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [usuarioLogeado, setUsuarioLogeado] = useState(false);
  const [adminLogeado, setAdminLogeado] = useState(false);
  
  function agregarAlCarrito(producto, cantidad) {
      // primero busco si el producto ya existe en el carrito
      const productoExistente = productosCarrito.find((p) => p.id === producto.id);

      if (productoExistente) {
          // Si el producto ya existe, actualizamos su cantidad
          // usamos el spread operator para no mutar el estado
          setProductosCarrito(
              productosCarrito.map((p) =>
                  p.id === producto.id
                      ? { ...productoExistente, cantidad: productoExistente.cantidad + cantidad }
                      : p
              )
          );
      } else {
          // Si el producto no existe, lo agregamos al carrito
          // usamos el spread operator para no mutar el estado
          setProductosCarrito([
              ...productosCarrito, 
              { ...producto, cantidad }
          ]);
      }
  }

  function eliminarDelCarrito(productoAEliminar) {
    setProductosCarrito(productosCarrito.filter((p) => p.id !== productoAEliminar.id));
  }

  function vaciarCarrito(){
    setProductosCarrito([]);
  }

  function manejarAdmin() {
    setAdminLogeado(!adminLogeado);
  }

  function manejarUsuarioLogeado() {
    setUsuarioLogeado(!usuarioLogeado);
  }

  return (
    <div className="app-container">
      <Router>
          <Header />
          <Nav productosCarrito={productosCarrito} />
          <div className="main-content">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/productos' element={<Productos agregarAlCarrito={agregarAlCarrito} />} />
              <Route path="/productos/:id" element={<ProductoDetalle agregarAlCarrito={agregarAlCarrito} />} />
              <Route
                path='/carrito'
                element={
                  <RutaProtegidaCarrito
                    usuarioLogeado={usuarioLogeado}
                    adminLogeado={adminLogeado}
                    productosCarrito={productosCarrito}
                    eliminarDelCarrito={eliminarDelCarrito}
                    vaciarCarrito={vaciarCarrito}
                  />
                }
              />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login user={usuarioLogeado} admin={adminLogeado} setLogeadoAdmin={manejarAdmin} setUsuarioLogeado={manejarUsuarioLogeado}/>} />
              <Route path='/admin' element={<RutaAdminProtegida adminLogeado={adminLogeado} />} />
              <Route path='*' element={<h1>404 - Página no encontrada</h1>} />
            </Routes>
          </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

