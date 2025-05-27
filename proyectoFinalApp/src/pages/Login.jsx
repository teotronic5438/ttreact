import "../styles/Login.css";
function Login({setUsuarioLogeado, setLogeadoAdmin, user, admin}) {

    return(
        <div className="login-container">
            <button className={user ? "btn-active" : "btn-deactivate"} onClick={setUsuarioLogeado}>
                {user ? "Cerrar sesión Usuario" : "Inciar como usuario"}
            </button>
            <button className={admin ? "btn-active" : "btn-deactivate"} onClick={setLogeadoAdmin}>
                {admin ? "Cerrar sesión Admin" : "Iniciar como administrador"}
            </button>
        </div>
    )
}

export default Login;