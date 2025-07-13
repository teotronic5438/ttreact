import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Admin from "../pages/Admin"; // ajustá el path si es necesario
import { useAuthContext } from "../contexts/AuthContext"; // Importa el contexto de autenticación
import FormularioProducto from "./FormularioProducto";
import Spinner from "./Spinner";

function RutaAdminProtegida() {

  const {user: adminLogeado, loading} = useAuthContext(); // Asegúrate de que useAuthContext esté importado correctamente

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !adminLogeado) {
      Swal.fire({
        icon: "warning",
        title: "Acceso restringido",
        text: "Debes iniciar sesión como administrador para acceder.",
        confirmButtonText: "Ir a login"
      }).then(() => {
        navigate("/login", { replace: true });
      });
    }
  }, [adminLogeado, navigate, loading]);

  if (loading) return <Spinner />

  return adminLogeado ? <FormularioProducto /> : null;
}

export default RutaAdminProtegida;
