import { useState } from "react";

function Card({ producto, funcionCarrito }) {
    const [cantidad, setCantidad] = useState(1);

    const aumentarCantidad = () => setCantidad((prev) => prev + 1);
    const disminuirCantidad = () => {
        if (cantidad > 1) setCantidad((prev) => prev - 1);
    };

    const handleCantidadChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= 1) {
            setCantidad(value);
            setCantidad(1);
        }
    };

    function agregarAlCarrito() {
        funcionCarrito(producto, cantidad);  // ahora pasamos también la cantidad
    }

    return (
        <div className="tarjetaIndividual">
            <div>
                <h3>{producto.nombre}</h3>
                <p className="descripcion">{producto.descripcion}</p>
            </div>
            <div>
                <img className="imagen-card" src={producto.imagen} alt="Foto de la persona" />
            </div>
            <p>$ {producto.precio} ARS</p>

            <div className="control-cantidad">
                <button onClick={disminuirCantidad}>−</button>
                <input 
                    type="number" 
                    value={cantidad} 
                    onChange={handleCantidadChange} 
                    min="1" 
                    style={{ width: "40px", textAlign: "center" }}
                />
                <button onClick={aumentarCantidad}>+</button>
            </div>

            <button className="btnAgregarCarrito" onClick={agregarAlCarrito}>
                Agregar al carrito
            </button>
        </div>
    );
}

export default Card;
