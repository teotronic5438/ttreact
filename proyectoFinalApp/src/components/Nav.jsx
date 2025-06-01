import { Link } from 'react-router-dom';

// PARA VER EL SUBINDICE ANTES USABA PROPS AHORA USAREMOS EL CONTEXTO
import { useContext } from 'react';
import { CarritoContext } from '../contexts/CarritoContext';

function Nav() {  

    const { productosCarrito } = useContext(CarritoContext);

    return (  
        <nav style={{ backgroundColor: "#333", color: "white", padding: "10px" }}>  
            <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0 }}>  
                <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Inicio</Link></li>  
                <li><Link to="/productos" style={{ color: "white", textDecoration: "none" }}>Productos</Link></li>  
                <li><Link to="/contacto" style={{ color: "white", textDecoration: "none" }}>Contacto</Link></li>
                <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link></li>
                <li><Link to="/carrito" style={{ color: "white", textDecoration: "none" }}>
                    Carrito<sup>{productosCarrito.length >0 ? productosCarrito.length : ""}</sup>
                </Link></li>
                <li><Link to="/admin" style={{ color: "white", textDecoration: "none" }}>Admin</Link></li>
                <li><Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link></li>
            </ul>  
        </nav>  
    );  
}  


export default Nav; 