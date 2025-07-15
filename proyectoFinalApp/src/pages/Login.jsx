import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import Swall from "sweetalert2";
import '../styles/Login.css'
import { crearUsuario, loginEmailPass } from "../auth/firebase";

function Login() {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(true)
    const [userLogin, setUserLogin] = useState("")
    const [userPass, setUserPass] = useState("")
    const { login, user } = useAuthContext();
    const naviagte = useNavigate();


    // funcion para registrar con correo y contraseña firebase/auth
    function registrarUsuario(e){
        e.preventDefault()
        crearUsuario(usuario, password).then((user) => {
            // console.log(user);
            
            login(user)

            setUsuario("")
            setPassword("")

            Swall.fire({
                title: "Exito",
                text: "Registro exitoso",
                icon: "success",
                confirmButtonText: "Aceptar",
                customClass: {
                    confirmButton: 'mi-boton-confirmacion'
                },
                buttonsStyling: false
            });
            naviagte("/");
        }).catch((error)=>{

            if (error.code === "auth/weak-password") {
                Swall.fire({
                    title: "Error",
                    text: "La contraseña debe tener al menos 6 caracteres.",
                    icon: "error",
                    confirmButtonText: "Aceptar"
                });
            } else if (error.code === "auth/email-already-in-use") {
                Swall.fire({
                    title: "Error",
                    text: "Correo ya registrado. Intenta iniciar sesión.",
                    icon: "warning",
                    confirmButtonText: "Aceptar"
                });
            } else {
                Swall.fire({
                    title: "Error",
                    text: error.message,
                    icon: "error",
                    confirmButtonText: "Aceptar"
                });
            }
        })

    }

    // Funcion para cerrar sesion // se reemplazo en el header
    // const handleSubmit2 = () => {
    //     logout()
    // }

    function iniciarSesionEmailPass(e){
        e.preventDefault()
        loginEmailPass(userLogin, userPass, naviagte).then((user) => {
            // console.log(user);
            
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
            naviagte("/");
        }).catch((error)=>{
            // console.log(error);
            
            if(error.code == "auth/invalid-credential"){
                Swall.fire({
                    title: "Error",
                    text: "Credenciales incorrectas",
                    icon: "error",
                    confirmButtonText: "Cerrar"
                });
            }
            // console.log(error);
            
            // Swall.fire({
            //     title: "Error",
            //     text: error.code,
            //     icon: "error",
            //     confirmButtonText: "Aceptar"
            // });
        })

    }

    function handleShow(e){
        e.preventDefault()
        setShow(!show)
    }

    // se reemplazo por el header
    // if (user){
    //     return(
    //         <form onSubmit={handleSubmit2}>
    //             <button type="submit">Cerrar Session</button>
    //         </form>
    //     )
    // } 
    
    
    if(!user && show){
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
                    <p className="pielinkform">¿No tienes cuenta? 
                        <a className="text-primary cursor-pointer" onClick={handleShow}>Registrate</a>
                    </p>
                </div>
            </div>
        )
    }
    if(!user && !show){
        return(
            <div className="contenedor-login">
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
                    <p className="pielinkform">¿Ya tienes cuenta? 
                        <a className="text-success cursor-pointer" onClick={handleShow}>Inicia Sesion</a>
                    </p>
                </div>
            </div>
        )
    }

}

export default Login;