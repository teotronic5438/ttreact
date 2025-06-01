import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import Swall from "sweetalert2";

function Login() {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuthContext();
    const naviagte = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulacion de autenticación
        if (usuario === "admin" && password === "1234") {
            login(usuario);
            Swall.fire({
                title: "Éxito",
                text: "Inicio de sesión exitoso",
                icon: "success",
                confirmButtonText: "Aceptar"
            });
            naviagte("/");
        } else {
            Swall.fire({
                title: "Error",
                text: "Usuario o contraseña incorrectos",
                icon: "error",
                confirmButtonText: "Aceptar"
            });
        }
    }

    return(
        <div className="login-container">

            <h2>Iniciar Sesión</h2>

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="usuario">Usuario:</label>
                    <input
                        type="text"
                        id="usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    )

}

export default Login;