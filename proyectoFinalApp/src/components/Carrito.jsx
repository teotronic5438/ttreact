import "../styles/Carrito.css"
import { dispararSweetBasico } from "../assets/SweetAlert";
import { useContext } from "react";
import { CarritoContext } from "../contexts/CarritoContext";

// export default function Carrito({productos, eliminarDelCarritoPages, vaciarCarrito}){
export default function Carrito(){

    // Desestructuración con alias
    const { productosCarrito: productos, eliminarDelCarrito: eliminarDelCarritoPages, vaciarCarrito } = useContext(CarritoContext);

    // Calculo el total con reduce
    const total = productos.reduce((acc, prod) => {
        return acc + (prod.precio * prod.cantidad);
    }, 0);

    
    const finalizarCompra = () => {
        // Vaciar el carrito
        vaciarCarrito(); 
        // Mostrar mensaje de éxito
        dispararSweetBasico('¡Compra finalizada con éxito!', 'Gracias por tu compra.', 'success', 'Cerrar');
    };

    return(
        <div className="productosCarritoContainer">
            <h2>Carrito de Compras</h2>
            {productos.length === 0 ? 
                <p>No hay productos en el carrito</p>
            :   (
                
                <table className="carrito-tabla">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>SubTotal</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
    
                    <tbody>
                        {productos.map(producto => (
                            <tr key={producto.nombre}>
                                <td>{producto.nombre}</td>
                                <td>{producto.descripcion}</td>
                                <td>$ {producto.precio}</td>
                                <td>{producto.cantidad}</td>
                                <td>$ {(producto.precio*producto.cantidad).toFixed(2)}</td>
                                <td><i onClick={() => eliminarDelCarritoPages(producto)}  className="fa-solid fa-trash icono-delete"></i></td>
                            </tr>
                        ))}
                        <tr className="total-row">
                            <td colSpan="4" style={{ textAlign: "right", fontWeight: "bold" }}>
                                Total:
                            </td>
                            <td style={{ fontWeight: "bold" }}>${total.toFixed(2)}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>)
            }
            
            {/* Botón de Finalizar Compra */}
            {productos.length > 0 && (
                <div style={{ marginTop: "20px", textAlign: "right" }}>
                    <button className="boton-finalizar-compra" onClick={finalizarCompra}>
                        Finalizar Compra
                    </button>
                </div>
            )}
  
        </div>
    )

}