import React, { useState } from 'react';
import Swal from 'sweetalert2';
// import { agregarProducto } from '../assets/request';
import { dispararSweetBasico } from '../assets/SweetAlert';
import { useProductosContext } from '../contexts/ProductosContext';

function FormularioProducto() {    // espera una funcion como parametro
    const {agregarProducto} = useProductosContext();

    // declara un producto que se inicializa con un objeto vacio
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
            setErrores(nuevosErrores);
            return("El nombre es obligatorio")
        }
        if (!producto.precio || producto.precio <= 0) {
            nuevosErrores.precio = 'El precio debe ser mayor a 0.';
            setErrores(nuevosErrores);
            return('El precio debe ser mayor a 0.')
        }
        if (!producto.descripcion.trim() || producto.descripcion.length < 10) {
            nuevosErrores.descripcion = 'La descripción debe tener al menos 10 caracteres.';
            setErrores(nuevosErrores);
            return('La descripción debe tener al menos 10 caracteres.')
        }
        if(!producto.imagen.trim()){
            return("La url de la imangen no debe estar vacia")
        }else {
            return true
        }
        // setErrores(nuevosErrores);
        // return Object.keys(nuevosErrores).length === 0;
    };

    // va a ser llamada cuando escriba en el input
    // del evento targen agarra un name y un value
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     onAgregar(producto); // Llamada a la función para agregar el producto
    //     setProducto({ nombre: '', precio: '', descripcion: '' }); // Limpiar el formulario
    // };

    const handleSubmit2 = (e) => {
        e.preventDefault();
        const validarForm = validarFormulario()
        if (validarForm == true) {
            // onAgregar(producto);     // antes agregabamos desde la funcion en app pero ahora desde request
            agregarProducto(producto).then(() => {
                dispararSweetBasico("Producto Agregado", `Se agrego ${producto.nombre} correctamente`, "success", "Cerrar");
                setProducto({ nombre: '', precio: '', descripcion: '' , imagen: ""})

   
            }).catch((error) => {
                dispararSweetBasico("Error al cargar el producto", error, "error", "Cerrar")
            })
            // setProducto({ nombre: '', precio: '', descripcion: '' });
            // setErrores({});
        } else {
            console.log(validarForm);
            Swal.fire({
                title: "Error en la carga de productos",
                text: validarForm,
                icon: "error",
                confirmButtonText: "Cerrar"
            });
            
        }
        // return(
        //     {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}
        //     {errores.precio && <p style={{ color: 'red' }}>{errores.precio}</p>}
        //     {errores.descripcion && <p style={{ color: 'red' }}>{errores.descripcion}</p>}
        // )

        // IMAGENES O ADMIN (IMAGENES 1:27:29)

    };

    return ( 
        <div className="container-form">
            <form onSubmit={handleSubmit2}>
                <h2>Agregar Producto</h2>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input
                    type="text" name="nombre" value={producto.nombre} onChange={handleChange}/>
                    {errores.nombre && <p style={{ color: 'red', textAlign: 'start' }}>{errores.nombre}</p>}
                </div>

                <div className="form-group">
                    <label>URL de la Imagen:</label>
                    <input 
                    type="text" name="imagen" value={producto.imagen} onChange={handleChange}/>
                    {errores.nombre && <p style={{ color: 'red', textAlign: 'start' }}>{errores.nombre}</p>}
                </div>
                
                <div className="form-group">
                    <label>Precio:</label>
                    <input type="number" name="precio" value={producto.precio} onChange={handleChange} required
                    min="0"/>
                    {errores.precio && <p style={{ color: 'red', textAlign: 'start'}}>{errores.precio}</p>}
                </div>

                <div className="form-group">
                    <label>Descripción:</label>
                    <textarea
                    className='area-agregarProductos form-control'
                    name="descripcion"
                    value={producto.descripcion}
                    onChange={handleChange}
                    required
                    />
                    {errores.descripcion && <p style={{ color: 'red', textAlign: 'start'}}>{errores.descripcion}</p>}
                </div>
                <button className='boton-agregar' type="submit">Agregar Producto</button>
            </form>
        </div>
    );
}

export default FormularioProducto;