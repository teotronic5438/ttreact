import "../styles/Carrito.css";

export default function Carrito({productos}){

    // Calculo el total con reduce
    const total = productos.reduce((acc, prod) => {
        return acc + (prod.precio * prod.cantidad);
    }, 0);

    return(
        <div className="carrito-conteiner">
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
                            </tr>
                        ))}
                        <tr className="total-row">
                            <td colSpan="4" style={{ textAlign: "right", fontWeight: "bold" }}>
                                Total:
                            </td>
                            <td style={{ fontWeight: "bold" }}>${total.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>)
            }
            
  
        </div>
    )

}