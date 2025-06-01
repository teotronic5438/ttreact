import React, {useState, useEffect} from "react";

import "../styles/ProductosContainer.css";
import Card from "./Card";
import Carrito from "./Carrito";
import Spinner from "./Spinner";

// function ProductosContainer({agregarAlCarrito}) {
function ProductosContainer() {


    // const [productosCarrito, setProductosCarrito] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
      fetch("https://68150b27225ff1af162af909.mockapi.io/productos")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
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


    // function funcionEnProductos(producto, cantidad) {
    //     agregarAlCarrito(producto, cantidad);
    // }



    // Función para eliminar un producto del carrito
    // function eliminarDelCarrito(productoAEliminar) {
    //     setProductosCarrito(productosCarrito.filter((p) => p.id !== productoAEliminar.id));
    // }



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
                            <Card key={producto.id} producto={producto}/>
                        ))
                    )}
                </div>
                {/* <Carrito productos={productosCarrito} eliminarProducto={eliminarDelCarrito} /> */}
            </>
        );
    }
}

export default ProductosContainer;
