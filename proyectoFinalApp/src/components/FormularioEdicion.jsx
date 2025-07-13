import { useEffect, useState } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { useProductosContext } from "../contexts/ProductosContext";
import Spinner from "./Spinner";
import Swal from 'sweetalert2';
import { useAuthContext } from "../contexts/AuthContext"

function FormularioEdicion(){
    const navigate = useNavigate();

    const {admin} = useAuthContext()
    // const [producto, setProducto] = useState(productoSeleccionado);
    const {id} = useParams();
    // const [productoSeleccionado, setProductoSeleccionado] = useState(null)
    const {obtenerProducto, editarProducto} = useProductosContext()
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        descripcion: '',
        imagen:''
    });
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(true)

    useEffect(()=>{
        obtenerProducto(id)
        .then((data) => {
            setProducto(data)
            setCargando(false);
        })
        .catch((error) => {
            // console.error("Error al obtener los productos:", error);
            if(error == "Producto no encontrado"){
                setError("Producto no encontrado");
            }
            setCargando(false);
        });
    }, [id, obtenerProducto])

    // Si no esta logeado como admin (auth), lo redirige al login
    if(!admin){
        return(
            <Navigate to="/login" replace />
        )
    }

    const validarFormulario = () => {
        if (!producto.nombre.trim()) {
            return("El nombre es obligatorio")
        }
        if (!producto.precio || producto.precio <= 0) {
            return('El precio debe ser mayor a 0.')
        }
        if (!producto.descripcion.trim() || producto.descripcion.length < 10) {
            return('La descripción debe tener al menos 10 caracteres.')
        }
        if(!producto.imagen.trim()){
            return("La url de la imangen no debe estar vacia")
        }else {
            return true
        }
    };


    // vuelve a setear el producto cada vez que cambia
    // useEffect(()=>{
    //     setProducto(productoSeleccionado)
    // }, [productoSeleccionado]);

    const handleChange = (e) => {
        const {name, value} = e.target;

        // Si es el campo precio, convertí a número
        const nuevoValor = name === "precio" ? Number(value) : value;

        setProducto({...producto, [name]: nuevoValor});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validarForm = validarFormulario()
        if(validarForm){
            editarProducto(producto).then((productoEditado) => {
                Swal.fire({
                    title: "Edicion Finalizada",
                    text: `${productoEditado.nombre} ha sido actualizado correctamente`,
                    icon: "success",
                    confirmButtonText: "Aceptar"
                }).then(() => {
                    setProducto({
                        nombre: '',
                        precio: '',
                        descripcion: '',
                        imagen:''
                    })
                    navigate("/productos");
                })
            }).catch((error) => {
                Swal.fire({
                    title: "Error",
                    text: "Error al actualizar el producto: " + error.message,
                    icon: "error",
                    confirmButtonText: "Cerrar"
                })
            })
        } else {
            Swal.fire({
                title: "Error en carga del producto",
                text: validarForm,
                icon: "error",
                confirmButtonText: "Cerrar"
            })
            
        }

    };

    // agregarmos logica para renderizado por spinner, error o productos
    if (cargando) {

      return (<Spinner />);

    } else if (error) {

        // Si hay un error, renderizamos el mensaje de error
        return <div className="error">Error: {error}</div>;

    } else {

        return (
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h2>Editar Producto</h2>
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
}

export default FormularioEdicion;