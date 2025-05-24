import React, {useState} from "react";

import "../styles/ProductosContainer.css";
import Card from "./Card";
import Carrito from "./Carrito";

function ProductosContainer({ productos }) {
    const [productosCarrito, setProductosCarrito] = useState([]);

    function agregarAlCarrito(producto) {
        // Busco dentro del arreglo productosCarrito si ya existe un producto con el mismo id.
        // Si no existe aún en el carrito, productoExistente será undefined.
        const productoExistente = productosCarrito.find((p) => p.id === producto.id);

        if (productoExistente) {
            setProductosCarrito(
                productosCarrito.map((p) =>
                    p.id === producto.id
                        ? { ...productoExistente, cantidad: productoExistente.cantidad + 1 }
                        : p
                )
            );
        } else {
            setProductosCarrito([...productosCarrito, { ...producto, cantidad: 1 }]);
        }
    }

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
            <Carrito productos={productosCarrito} />
        </>
    );
}

export default ProductosContainer;
