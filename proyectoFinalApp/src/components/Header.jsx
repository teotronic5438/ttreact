// import { useAuthContext } from "../contexts/AuthContext";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import '../styles/Header.css'

// function Header(){
//     const { user, logout } = useAuthContext();
//     const [menuOpen, setMenuOpen] = useState(false);
//     const navigate = useNavigate();

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen)
//     }

//     const handleLogOut = () => {
//         logout()
//         navigate('/login')
//     }

//     const handleLoginRedirect = () => {
//         navigate('/login');
//     }

//     return(
//         <header className="header">
//             <h1 className="titulo">Bienvenido a mi App React</h1>

//             {/* {user && (
//                 <div className="menu-container">
//                     <button className="user-button" onClick={toggleMenu}>
//                         {user.email} ⌄
//                     </button>

//                     {menuOpen && (
//                         <div className="dropdown-menu">
//                             <button onClick={handleLogOut}>Cerrar sesión</button>
//                         </div>
//                     )}
//                 </div>
//             )} */}

//             {user ? (
//                 <>
//                     <button className="user-button" onClick={toggleMenu}>
//                         {user.email} ⌄
//                     </button>

//                     {menuOpen && (
//                         <div className="dropdown-menu">
//                             <button onClick={handleLogOut}>Cerrar sesión</button>
//                         </div>
//                     )}
//                 </>
//             ) : (
//                 <button className="user-button" onClick={handleLoginRedirect}>
//                         Login
//                 </button>
//             )}

//         </header>
//     )
// }

// export default Header;

import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";

function Header() {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout();
    navigate("/login");
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <header style={{ backgroundColor: "#222", color: "#fff", padding: "10px 0" }}>
      <Container>
        <Row className="align-items-center">
          <Col xs={6}>
            <h1 className="m-0" style={{ fontSize: "1.8rem" }}>Teotronic</h1>
          </Col>
          <Col xs={6} className="text-end">
            {user ? (
              <Dropdown align="end">
                <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm">
                  {user.email}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item className="py-1 px-2" onClick={handleLogOut}>Cerrar sesión</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Button size="sm" variant="outline-light" onClick={handleLoginRedirect}>
                Login
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
