// import { Link } from 'react-router-dom';

// // PARA VER EL SUBINDICE DE NAV ANTES USABA PROPS AHORA USAREMOS EL CONTEXTO
// import { useContext } from 'react';
// import { CarritoContext } from '../contexts/CarritoContext';
// import { useAuthContext } from '../contexts/AuthContext';
// import { FaShoppingCart } from "react-icons/fa";

// function Nav() {  

//     const { productosCarrito } = useContext(CarritoContext);
//     const {admin} = useAuthContext(); // Asegúrate de que useAuthContext esté importado correctamente

//     return (  
//         <nav style={{ backgroundColor: "#333", color: "white", padding: "10px" }}>  
//             <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0 }}>  
//                 <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Inicio</Link></li>  
//                 <li><Link to="/productos" style={{ color: "white", textDecoration: "none" }}>Productos</Link></li>
//                 <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>Nosotros</Link></li> 
//                 <li><Link to="/contacto" style={{ color: "white", textDecoration: "none" }}>Contacto</Link></li>
//                 <li><Link to="/carrito" style={{ color: "white", textDecoration: "none" }}>
//                     <FaShoppingCart /><sup>{productosCarrito.length >0 ? productosCarrito.length : ""}</sup>
//                 </Link></li>
//                 <li> {admin ? <Link to="/admin" style={{ color: "white", textDecoration: "none" }}>Admin</Link> : <></>} </li>
//                 {/* <li><Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link></li> */}
//                 {(admin) ?
//                 <li><Link to="/admin/agregarProductos" style={{ color: "white", textDecoration: "none" }}>Agregar Productos</Link></li>
//                 : ""}
//             </ul>  
//         </nav>  
//     );  
// }  


// export default Nav; 


/* version 2 del navbar sin unificar pero estilizado con bootstrap */
// import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { CarritoContext } from '../contexts/CarritoContext';
// import { useAuthContext } from '../contexts/AuthContext';
// import { FaShoppingCart } from "react-icons/fa";

// import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

// function NavBar() {
//   const { productosCarrito } = useContext(CarritoContext);
//   const { admin } = useAuthContext();

//   return (
//     <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
//       <Container>
//         <Navbar.Brand as={Link} to="/">Teotronic</Navbar.Brand>

//         <Navbar.Toggle aria-controls="nav-bar" />

//         <Navbar.Collapse id="nav-bar">
//             <Nav className="ms-auto">
//                 <Nav.Link as={Link} to="/">Inicio</Nav.Link>
//                 <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
//                 <Nav.Link as={Link} to="/about">Nosotros</Nav.Link>
//                 <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
//                 {admin && <Nav.Link as={Link} to="/admin">Admin</Nav.Link>}
//                 {admin && <Nav.Link as={Link} to="/admin/agregarProductos">Agregar Productos</Nav.Link>}
//             </Nav>
//             <Nav>
//                 <Nav.Link as={Link} to="/carrito">
//                   <FaShoppingCart /> <sup>{productosCarrito.length > 0 ? productosCarrito.length : ""}</sup>
//                 </Nav.Link>
//             </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;


/* version 3 navbar y header unificado con bootstrap */
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../contexts/CarritoContext';
import { useAuthContext } from '../contexts/AuthContext';
import { FaShoppingCart, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Navbar, Nav, Container, NavDropdown, Image, Button } from 'react-bootstrap';
import logo from "../assets/carrito48.png"

function NavBar() {
  const { productosCarrito } = useContext(CarritoContext);
  const { user, logout, admin } = useAuthContext();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout();
    navigate("/login");
  };

  // const handleLoginRedirect = () => {
  //   navigate("/login");
  // };

  return (
    <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image
            src={logo}
            alt="logo"
            width={30}
            height={30}
            className="me-2"
          />
          Teotronic
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="nav-bar" />
        <Navbar.Collapse id="nav-bar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/about">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            {admin && <Nav.Link as={Link} to="/admin">Admin</Nav.Link>}
            {admin && <Nav.Link as={Link} to="/admin/agregarProductos">Agregar Productos</Nav.Link>}
            <Nav.Link as={Link} to="/carrito">
              <FaShoppingCart />
              <sup>{productosCarrito.length > 0 ? productosCarrito.length : ""}</sup>
            </Nav.Link>
            {!user ? (
              <Nav.Link as={Link} to="/login" className="d-flex align-items-center">
                <FaSignInAlt className="me-1" />
                Iniciar sesión
              </Nav.Link>
            ) : (
              <NavDropdown title={user.email} id="user-menu" align="end" className="ms-2">
                <NavDropdown.Item
                  onClick={handleLogOut}
                  className="gap-2 text-primary py-1 px-2"
                  style={{ fontSize: '0.85rem', lineHeight: '1.2' }}
                >
                  <FaSignOutAlt className='mb-1' size={14} />&nbsp;
                  <span>Cerrar sesión</span>
                </NavDropdown.Item>
              </NavDropdown>
            )}

          </Nav>

          {/* <Nav className="align-items-center">
            <Nav.Link as={Link} to="/carrito">
              <FaShoppingCart />
              <sup>{productosCarrito.length > 0 ? productosCarrito.length : ""}</sup>
            </Nav.Link>

            {!user ? (
              <Button variant="outline-light" size="sm" onClick={handleLoginRedirect} className="ms-2">
                <FaSignInAlt className="me-1" />
                Login
              </Button>
            ) : (
              <NavDropdown title={user.email} id="user-menu" align="end" className="ms-2">
                <NavDropdown.Item
                  onClick={handleLogOut}
                  className="d-flex align-items-center gap-2 text-primary py-1 px-2"
                  style={{ fontSize: '0.85rem', lineHeight: '1.2' }}
                >
                  <FaSignOutAlt size={14} />
                  <span>Cerrar sesión</span>
                </NavDropdown.Item>

              </NavDropdown>
            )}
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
