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

  return (
    <div className="app-container">
      <Router>
          <Header />
          <Nav />
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

