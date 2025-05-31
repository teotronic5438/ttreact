// components/RutaProtegidaCarrito.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CarritoPage from "../pages/CarritoPage";

function RutaProtegidaCarrito({ usuarioLogeado, adminLogeado, productosCarrito, eliminarDelCarrito, vaciarCarrito }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!usuarioLogeado && !adminLogeado) {
      Swal.fire({
        icon: "info",
        title: "Debes iniciar sesión",
        text: "Para ver el carrito, inicia sesión como usuario o administrador.",
        confirmButtonText: "Ir a login"
      }).then(() => {
        navigate("/login", { replace: true });
      });
    }
  }, [usuarioLogeado, adminLogeado, navigate]);

  return (usuarioLogeado || adminLogeado)
    ? <CarritoPage productosCarrito={productosCarrito} eliminarDelCarrito={eliminarDelCarrito} vaciarCarrito={vaciarCarrito} />
    : null;
}

export default RutaProtegidaCarrito;
