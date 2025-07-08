import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductosContext } from "../contexts/ProductosContext";
import Spinner from "./Spinner";

function FormularioEdicion(){
    // const [producto, setProducto] = useState(productoSeleccionado);
    const {id} = useParams();
    // const [productoSeleccionado, setProductoSeleccionado] = useState(null)
    const {obtenerProducto} = useProductosContext()
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
        try{
            const respuesta = await fetch(`https://68150b27225ff1af162af909.mockapi.io/productos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(producto)
            });

            if(!respuesta.ok){
                throw new Error('Error al actualizar producto');
            }

            const data = await respuesta.json();

            onActualizar(data);
            alert('Producto actualizado correctamente.');
        } catch (error){
            console.error(error.message);
            alert('Hubo un probblema al actualizar el producto')
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