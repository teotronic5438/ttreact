import { NavLink } from "react-router";

function Nav() {
  return (
    // <nav style={{ backgroundColor: '#333', color: 'white', padding: '10px'}}>
    //   <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around', margin: 0}}>
    //     <li><a href="#home" style={{color: "white", textDecoration: "none"}}>Inicio</a></li>
    //     <li><a href="#about" style={{color: "white", textDecoration: "none"}}>Acerca de</a></li>
    //     <li><a href="#contact" style={{color: "white", textDecoration: "none"}}>Contacto</a></li>
    //   </ul>
    // </nav>
      <nav style={{ backgroundColor: '#333', color: 'white', padding: '10px', listStyle: 'none', display: 'flex', justifyContent: 'space-around', margin: 0}}>
        <NavLink to="/" end style={{color: "white", textDecoration: "none"}}>Home</NavLink>
        <NavLink to="/productos" end style={{color: "white", textDecoration: "none"}}>Productos</NavLink>
        <NavLink to="/carrito" style={{color: "white", textDecoration: "none"}}>Carrito</NavLink>
      </nav>
  );
}

export default Nav;