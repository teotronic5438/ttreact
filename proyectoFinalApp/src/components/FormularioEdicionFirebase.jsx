import { useEffect, useState } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { useProductosContext } from "../contexts/ProductosContext";
import Spinner from "./Spinner";
import Swal from 'sweetalert2';
import { useAuthContext } from "../contexts/AuthContext";

function FormularioEdicionFirebase(){
    const navigate = useNavigate();
    const { admin } = useAuthContext();

    const { id } = useParams();

    const { obtenerProductoFirebase, actualizarProductoFirebase } = useProductosContext();

    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        descripcion: '',
        imagen:''
    });
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        obtenerProductoFirebase(id)
            .then((data) => {
                setProducto(data);
                setCargando(false);
            })
            .catch((error) => {
                if (error.message === "El producto no existe") {
                    setError("Producto no encontrado");
                }
                setCargando(false);
            });
    }, [id, obtenerProductoFirebase]);

    if (!admin) return <Navigate to="/login" replace />;

    const validarFormulario = () => {
        if (!producto.nombre.trim()) return("El nombre es obligatorio");
        if (!producto.precio || producto.precio <= 0) return('El precio debe ser mayor a 0.');
        if (!producto.descripcion.trim() || producto.descripcion.length < 10) return('La descripción debe tener al menos 10 caracteres.');
        if (!producto.imagen.trim()) return("La url de la imagen no debe estar vacía");
        return true;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const nuevoValor = name === "precio" ? Number(value) : value;
        setProducto({ ...producto, [name]: nuevoValor });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validarForm = validarFormulario();
        if (validarForm === true) {
            actualizarProductoFirebase(id, producto)
                .then(() => {
                    Swal.fire({
                        title: "Edición Finalizada",
                        text: `${producto.nombre} ha sido actualizado correctamente`,
                        icon: "success",
                        confirmButtonText: "Aceptar"
                    }).then(() => {
                        navigate("/productos");
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        title: "Error",
                        text: "Error al actualizar el producto: " + error.message,
                        icon: "error",
                        confirmButtonText: "Cerrar"
                    });
                });
        } else {
            Swal.fire({
                title: "Error en el formulario",
                text: validarForm,
                icon: "error",
                confirmButtonText: "Cerrar"
            });
        }
    };

    if (cargando) return <Spinner />;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Editar Producto (Firebase)</h2>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={producto.nombre || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Imagen:</label>
                    <input
                        type="text"
                        name="imagen"
                        value={producto.imagen || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Precio:</label>
                    <input
                        type="number"
                        name="precio"
                        value={producto.precio || ''}
                        onChange={handleChange}
                        required
                        min="0"
                        step="0.01"
                    />
                </div>
                <div className="form-group">
                    <label>Descripción:</label>
                    <textarea
                        name="descripcion"
                        value={producto.descripcion || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Actualizar Producto</button>
            </form>
        </div>
    );
}

export default FormularioEdicionFirebase;
