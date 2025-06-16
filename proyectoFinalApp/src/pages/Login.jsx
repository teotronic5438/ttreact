import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import Swall from "sweetalert2";
import '../styles/Login.css'
import { crearUsuario, loginEmailPass } from "../auth/firebase";

function Login() {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [userLogin, setUserLogin] = useState("")
    const [userPass, setUserPass] = useState("")
    const { login, user, logout } = useAuthContext();
    const naviagte = useNavigate();
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     // Simulacion de autenticación
    //     if (usuario === "admin" && password === "1234") {
    //         login(usuario);
    //         Swall.fire({
    //             title: "Éxito",
    //             text: "Inicio de sesión exitoso",
    //             icon: "success",
    //             confirmButtonText: "Aceptar",
    //             customClass: {
    //                 confirmButton: 'mi-boton-confirmacion'
    //             },
    //             buttonsStyling: false  // desactiva estilos por defecto de SweetAlert2
    //         });
    //         naviagte("/");
    //     } else {
    //         Swall.fire({
    //             title: "Error",
    //             text: "Usuario o contraseña incorrectos",
    //             icon: "error",
    //             confirmButtonText: "Aceptar"
    //         });
    //     }
    // }

    // funcion para registrar con correo y contraseña firebase/auth
    function registrarUsuario(e){
        e.preventDefault()
        crearUsuario(usuario, password, naviagte)
        login(usuario)
        setUsuario("")
        setPassword("")
    }

    // Funcion para cerrar sesion
    const handleSubmit2 = () => {
        logout()
    }

    function iniciarSesionEmailPass(e){
        e.preventDefault()
        loginEmailPass(userLogin, userPass, naviagte).then((user) => {
            login(user)
            setUserLogin("")
            setUserPass("")
            Swall.fire({
                title: "Logeo Exitoso",
                text: "Inicio de sesión exitoso",
                icon: "success",
                confirmButtonText: "Aceptar",
                customClass: {
                    confirmButton: 'mi-boton-confirmacion'
                },
                buttonsStyling: false
            });
            naviagte("/login");
        }).catch((error)=>{
            // console.log(error);
            
            Swall.fire({
                title: "Error",
                text: error.code,
                icon: "error",
                confirmButtonText: "Aceptar"
            });
        })

    }

    if (user){
        return(
            <form onSubmit={handleSubmit2}>
                <button type="submit">Cerrar Session</button>
            </form>
        )
    }

    return(
        <div className="contenedor-login">
            <div className="form-sesion login-container">
                <h2>Iniciar Sesión</h2>

                {/* <form onSubmit={handleSubmit}> */}
                <form onSubmit={iniciarSesionEmailPass}>

                    <div className="form-group">
                        <label htmlFor="usuario">Correo:</label>
                        <input
                            type="email"
                            id="usuario"
                            value={userLogin}
                            onChange={(e) => setUserLogin(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            value={userPass}
                            onChange={(e) => setUserPass(e.target.value)}
                            required
                        />
                    </div>
                    
                    <button type="submit">Iniciar Sesión</button>
                </form>
            </div>
            
            <div className="form-registrarse login-container">
                <h2 className="h2-form_registrarse">Registrarse</h2>
                <form onSubmit={registrarUsuario}>

                    <div className="form-group">
                        <label htmlFor="usuario">Email:</label>
                        <input
                            type="email"
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
                    
                    <button className="btn-registrarse" type="submit">Registrarse</button>
                </form>
            </div>
        </div>
    )

}

export default Login;