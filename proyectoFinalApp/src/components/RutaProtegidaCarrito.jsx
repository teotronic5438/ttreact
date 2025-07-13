// components/RutaProtegidaCarrito.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CarritoPage from "../pages/CarritoPage";
import { useAuthContext } from "../contexts/AuthContext";
import Spinner from "./Spinner";

function RutaProtegidaCarrito() {
  const navigate = useNavigate();
  const {user: usuarioLogeado, admin: adminLogeado, loading } = useAuthContext();

  useEffect(() => {
    // if (!usuarioLogeado && !adminLogeado) {
    //   Swal.fire({
    //     icon: "info",
    //     title: "Debes iniciar sesión",
    //     text: "Para ver el carrito, inicia sesión como usuario o administrador.",
    //     confirmButtonText: "Ir a login"
    //   }).then(() => {
    //     navigate("/login", { replace: true });
    //   });
    // }
    if (!loading && !usuarioLogeado && !adminLogeado) {
      Swal.fire({
        icon: "info",
        title: "Debes iniciar sesión",
        text: "Para ver el carrito, inicia sesión como usuario o administrador.",
        confirmButtonText: "Ir a login"
      }).then(() => {
        navigate("/login", { replace: true });
      });
    }
  }, [usuarioLogeado, adminLogeado, navigate, loading]);

  if (loading) return <Spinner />; // o un <Spinner /> si querés

  return (usuarioLogeado || adminLogeado)
    ? <CarritoPage />
    : null;
}

export default RutaProtegidaCarrito;
