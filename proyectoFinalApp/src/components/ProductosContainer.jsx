import React, {useState} from "react";

import "../styles/ProductosContainer.css";
import Card from "./Card";
import Carrito from "./Carrito";

function ProductosContainer({ productos }) {
    const [carrito, setCarrito] = useState([]);
    return (
        <>
            <div className="productosContainer">
                {productos.length === 0 ? (
                    <h3>El carrito está vacío</h3>
                ) : (
                    productos.map((producto) => (
                        <Card key={producto.id} producto={producto} />
                    ))
                )}
            </div>
            <Carrito carrito={carrito} />
        </>
    );
}

export default ProductosContainer;
