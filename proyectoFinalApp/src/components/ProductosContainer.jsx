import React, {useState, useEffect} from "react";

import "../styles/ProductosContainer.css";
import Card from "./Card";
import Carrito from "./Carrito";
import Spinner from "./Spinner";

function ProductosContainer() {
    const [productosCarrito, setProductosCarrito] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
      fetch("https://68150b27225ff1af162af909.mockapi.io/productos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setProductosCarrito(data);
        setProductos(data); // Guardamos los productos en el estado
        setCargando(false);  // esto servira para desactivar el spinner
        setError(null);     // esto servira para desactivar el spinner

      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
        setCargando(false);
        setError("Error al obtener los productos");
      });
    }, []);



    function agregarAlCarrito(producto, cantidad) {
        // primero busco si el producto ya existe en el carrito
        const productoExistente = productosCarrito.find((p) => p.id === producto.id);

        if (productoExistente) {
            // Si el producto ya existe, actualizamos su cantidad
            // usamos el spread operator para no mutar el estado
            setProductosCarrito(
                productosCarrito.map((p) =>
                    p.id === producto.id
                        ? { ...productoExistente, cantidad: productoExistente.cantidad + cantidad }
                        : p
                )
            );
        } else {
            // Si el producto no existe, lo agregamos al carrito
            // usamos el spread operator para no mutar el estado
            setProductosCarrito([
                ...productosCarrito, 
                { ...producto, cantidad }
            ]);
        }
    }


    // Función para eliminar un producto del carrito
    function eliminarDelCarrito(productoAEliminar) {
        setProductosCarrito(productosCarrito.filter((p) => p.id !== productoAEliminar.id));
    }



    // agregarmos logica para renderizado por spinner, error o productos
    if (cargando) {

      return (<Spinner />);

    } else if (error) {

        // Si hay un error, renderizamos el mensaje de error
        return <div className="error">Error: {error}</div>;

    } else {

        // Si no hay error y no está cargando, renderizamos los productos
        return (
            <>
                <div className="productosContainer">
                    {productos.length === 0 ? (
                        <h3>El carrito está vacío</h3>
                    ) : (
                        productos.map((producto) => (
                            <Card key={producto.id} producto={producto} funcionCarrito={agregarAlCarrito}/>
                        ))
                    )}
                </div>
                <Carrito productos={productosCarrito} eliminarProducto={eliminarDelCarrito} />
            </>
        );
    }
}

export default ProductosContainer;
