import { dispararSweetBasico } from "../assets/SweetAlert";
import Carrito from "../components/Carrito";

function CarritoPage({productosCarrito, eliminarDelCarrito}) {

    function eliminarDelCarritoPages(productoAEliminar) {
        dispararSweetBasico(
            "¿Estás seguro de eliminar este producto del carrito?",
            "Esta acción no se puede deshacer.",
            "warning",
            "Sí, eliminar",
            true
        ).then((result) => {
            console.log(result);
            
            if (result.isConfirmed) {
                eliminarDelCarrito(productoAEliminar);
            }
        });
        
        // eliminarDelCarrito(productoAEliminar);
    }

    
    return(
        <Carrito productos={productosCarrito} eliminarDelCarritoPages={eliminarDelCarritoPages} />
    )
}

export default CarritoPage;