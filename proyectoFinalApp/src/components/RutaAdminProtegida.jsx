import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Admin from "../pages/Admin"; // ajustá el path si es necesario

function RutaAdminProtegida({ adminLogeado }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!adminLogeado) {
      Swal.fire({
        icon: "warning",
        title: "Acceso restringido",
        text: "Debes iniciar sesión como administrador para acceder.",
        confirmButtonText: "Ir a login"
      }).then(() => {
        navigate("/login", { replace: true });
      });
    }
  }, [adminLogeado, navigate]);

  return adminLogeado ? <Admin /> : null;
}

export default RutaAdminProtegida;
