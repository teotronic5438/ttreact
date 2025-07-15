import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import FormularioProductoFirebase from "./FormularioProductoFirebase";
import { useAuthContext } from "../contexts/AuthContext";
import Spinner from "./Spinner";

function RutaAgregarFirebase() {
  const { user: adminLogeado, loading } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !adminLogeado) {
      Swal.fire({
        icon: "warning",
        title: "Acceso restringido",
        text: "Debes iniciar sesión como administrador para acceder.",
        confirmButtonText: "Ir a login"
      }).then(() => navigate("/login", { replace: true }));
    }
  }, [adminLogeado, navigate, loading]);

  if (loading) return <Spinner />;
  return adminLogeado ? <FormularioProductoFirebase /> : null;
}

export default RutaAgregarFirebase;
