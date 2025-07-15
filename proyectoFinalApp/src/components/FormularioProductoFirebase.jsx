import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { dispararSweetBasico } from '../assets/SweetAlert';
import { useProductosContext } from '../contexts/ProductosContext';
import { useNavigate } from 'react-router-dom';


function FormularioProductoFirebase() {

    const navigate = useNavigate();

    const { crearProductoFirebase } = useProductosContext();

    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        descripcion: '',
        imagen: ''
    });

    const [errores, setErrores] = useState({});

    const validarFormulario = () => {
        const nuevosErrores = {};
        if (!producto.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio.';
        }
        if (!producto.precio || producto.precio <= 0) {
            nuevosErrores.precio = 'El precio debe ser mayor a 0.';
        }
        if (!producto.descripcion.trim() || producto.descripcion.length < 10) {
            nuevosErrores.descripcion = 'La descripción debe tener al menos 10 caracteres.';
        }
        if (!producto.imagen.trim()) {
            nuevosErrores.imagen = 'La URL de la imagen no debe estar vacía.';
        }

        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            crearProductoFirebase(producto)
                .then(() => {
                    dispararSweetBasico("Producto agregado", `${producto.nombre} fue agregado correctamente`, "success", "Aceptar");
                    setProducto({ nombre: '', precio: '', descripcion: '', imagen: '' });
                    setErrores({});
                    navigate("/productos");
                })
                .catch((error) => {
                    dispararSweetBasico("Error al agregar el producto", error.message, "error", "Cerrar");
                });
        } else {
            Swal.fire({
                title: "Error en el formulario",
                text: "Revisá los campos antes de continuar.",
                icon: "error",
                confirmButtonText: "Cerrar"
            });
        }
    };

    return (
        <div className="container-form">
            <form onSubmit={handleSubmit}>
                <h2>Agregar Producto (Firebase)</h2>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={producto.nombre}
                        onChange={handleChange}
                    />
                    {errores.nombre && <p className="text-danger">{errores.nombre}</p>}
                </div>

                <div className="form-group">
                    <label>URL de la Imagen:</label>
                    <input
                        type="text"
                        name="imagen"
                        value={producto.imagen}
                        onChange={handleChange}
                    />
                    {errores.imagen && <p className="text-danger">{errores.imagen}</p>}
                </div>

                <div className="form-group">
                    <label>Precio:</label>
                    <input
                        type="number"
                        name="precio"
                        value={producto.precio}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                    />
                    {errores.precio && <p className="text-danger">{errores.precio}</p>}
                </div>

                <div className="form-group">
                    <label>Descripción:</label>
                    <textarea
                        name="descripcion"
                        value={producto.descripcion}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                    {errores.descripcion && <p className="text-danger">{errores.descripcion}</p>}
                </div>

                <button type="submit" className="btn btn-primary">Agregar Producto</button>
            </form>
        </div>
    );
}

export default FormularioProductoFirebase;
