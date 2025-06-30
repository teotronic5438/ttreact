import { useAuthContext } from "../contexts/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Header.css'

function Header(){
    const { user, logout } = useAuthContext();
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleLogOut = () => {
        logout()
        navigate('/login')
    }

    return(
        <header className="header">
            <h1 className="titulo">Bienvenido a mi App React</h1>

            {user && (
                <div className="menu-container">
                    <button className="user-button" onClick={toggleMenu}>
                        {user.email} ⌄
                    </button>

                    {menuOpen && (
                        <div className="dropdown-menu">
                            <button onClick={handleLogOut}>Cerrar sesión</button>
                        </div>
                    )}
                </div>
            )}
        </header>
    )
}

export default Header;