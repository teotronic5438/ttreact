import { createContext, useContext, useState } from "react";
// import { data } from "react-router-dom";
import {
  crearProducto as crearProductoFirebase,
  obtenerProductos as obtenerProductosFirebase,
  obtenerProductoPorId as obtenerProductoFirebase,
  eliminarProducto as eliminarProductoFirebase,
  actualizarProducto as actualizarProductoFirebase
} from '../auth/firebase'; // o donde esté tu archivo firebase.js



// Crear el contexto
const ProductosContext = createContext();

// Crear el proveedor del contexto
export function ProductosProvider({ children }){

    const [productos, setProductos] = useState([])
    // const [productoEncontrado, setProductoEncontrado] = useState([]);

    function obtenerProductos(){
        return(
            new Promise((res, rej) => {
                fetch("https://68150b27225ff1af162af909.mockapi.io/productos")
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data);
                    // setProductosCarrito(data);
                    setProductos(data); // Guardamos los productos en el estado
                    // setCargando(false);  // esto servira para desactivar el spinner
                    // setError(null);     // esto servira para desactivar el spinner
                    res(data)
                })
                .catch((error) => {
                    console.error("Error al obtener los productos:", error);
                    // setCargando(false);
                    // setError("Error al obtener los productos");
                    rej(error)
                });
            })
        )
    }

    const agregarProducto = (producto) => {

        return (
            // eslint-disable-next-line no-async-promise-executor
            new Promise(async (resolve, reject) => {
                try {
                    const respuesta = await fetch('https://68150b27225ff1af162af909.mockapi.io/productos', {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(producto),
                    });

                    // si la respuesta no esta OK da un error
                    if (!respuesta.ok) {
                        throw new Error('Error al agregar el producto.');
                    }
                    const data = await respuesta.json();
                    // console.log('Producto agregado:', data);
                    // alert('Producto agregado correctamente');
                    resolve(data)
                } catch (error) {
                    console.error(error.message);
                    // alert('Hubo un problema al agregar el producto.');
                    reject(error.message)
                }
            })
        )

    };

    function obtenerProducto(id){
        return(
            new Promise((res, rej) => {
                fetch(`https://68150b27225ff1af162af909.mockapi.io/productos/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    // setProductoEncontrado(data)
                    if (!data || !data.id) {
                        // console.log("Producto no encontrado");
                        rej("Producto no encontrado");
                        return; // 🔁 ¡importante para que no siga con res(data)!
                    }
                    res(data)
                })
                .catch((error) => {
                    // console.error("Error al obtener los productos:", error);
                    rej(error)
                });
            })
        )
    }

    // funcion para editar un producto, en el contexto
    // function editarProducto(producto){
    //     return new Promise(async(res, rej) => {
    //         try{
    //             const respuesta = await fetch(`https://68150b27225ff1af162af909.mockapi.io/productos/${id}`, {
    //                 method: 'PUT',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify(producto)
    //             });

    //             if(!respuesta.ok){
    //                 throw new Error('Error al actualizar producto');
    //             }
    //             const data = await respuesta.json();
    //             res(data)
    //             alert('Producto actualizado correctamente.');
    //         } catch (error){
    //             console.error(error.message);
    //             alert('Hubo un probblema al actualizar el producto: ' + error.message)
    //             rej(error)
    //         }
    //     })
    // }

    // Función para editar un producto, en el contexto
    async function editarProducto(producto) {
        try {
            const respuesta = await fetch(`https://68150b27225ff1af162af909.mockapi.io/productos/${producto.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(producto)
            });

            if(!respuesta.ok) {
                throw new Error('Error al actualizar producto');
            }
            
            const data = await respuesta.json();
            // alert('Producto actualizado correctamente.');
            // reemplazo el res por return (async / await)
            return data;
        } catch (error) {
            console.error(error.message);
            // alert('Hubo un problema al actualizar el producto: ' + error.message);
            // reemaplazo el rej por throw
            throw error;
        }
    }

    // Uso la funcion eliminar productos dentro del contexto
    async function eliminarProducto(id) {
        try {
            const respuesta = await fetch(`https://68150b27225ff1af162af909.mockapi.io/productos/${id}`, {
                method: 'DELETE'
            });

            if (!respuesta.ok) {
                throw new Error('Error al eliminar el producto');
            }

            const data = await respuesta.json();

            // actualizo el estado local de los productos ya cargados
            setProductos(productos.filter(producto => producto.id !== id));

            return data;
        } catch (error) {
            console.error("Error en eliminarProducto:", error);
            throw error;
        }
    }


    return(
        <ProductosContext.Provider 
            value={{obtenerProductos, productos, setProductos,  agregarProducto, obtenerProducto, editarProducto, eliminarProducto,
                    crearProductoFirebase,
                    obtenerProductosFirebase,
                    obtenerProductoFirebase,
                    actualizarProductoFirebase,
                    eliminarProductoFirebase
            }}>
            {children}
        </ProductosContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useProductosContext = () => useContext(ProductosContext);