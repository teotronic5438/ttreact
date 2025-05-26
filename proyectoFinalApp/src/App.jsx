import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Productos from './pages/Productos';
import CarritoPage from './pages/CarritoPage';
import { useState } from 'react';
import Contacto from './pages/Contacto';
import About from './pages/About';

function App() {
  const [productosCarrito, setProductosCarrito] = useState([]);
  
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


  return (
    <div className="app-container">
      <Router>
          <Header />
          <Nav productosCarrito={productosCarrito} />
          <div className="main-content">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/productos' element={<Productos agregarAlCarrito={agregarAlCarrito} />} />
              <Route path='/carrito' element={<CarritoPage productosCarrito={productosCarrito} eliminarDelCarrito={eliminarDelCarrito} />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

