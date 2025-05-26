import Carrito from "../components/Carrito";

function CarritoPage({productosCarrito, eliminarDelCarrito}) {

    function eliminarDelCarritoPages(productoAEliminar) {
        eliminarDelCarrito(productoAEliminar);
    }
    
    return(
        <Carrito productos={productosCarrito} eliminarDelCarritoPages={eliminarDelCarritoPages} />
    )
}

export default CarritoPage;