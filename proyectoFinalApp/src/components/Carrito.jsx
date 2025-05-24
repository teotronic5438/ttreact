import "../styles/Carrito.css"

export default function Carrito({carrito}) {
    return (
        <div className="productosContainer">
            {carrito.map((producto) => (
                <div key={producto.id} className="tarjetaIndividual">
                    <div>
                        <h1>{producto.nombre}</h1>
                        <p>{producto.descripcion}</p>
                    </div>
                    <div>
                        <img src={producto.imagen} alt="Foto del producto" />
                    </div>
                    <p>$ {producto.precio} ARS</p>
                    <button className="btnAgregarCarrito">Eliminar del carrito</button>
                </div>
            ))}
        </div>
    );
}