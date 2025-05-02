import "../styles/Carrito.css";

export default function Carrito({productos}){
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
                        </tr>
                    </thead>
    
                    <tbody>
                        {productos.map(producto => (
                            <tr key={producto.nombre}>
                                <td>{producto.nombre}</td>
                                <td>{producto.descripcion}</td>
                                <td>${producto.precio}</td>
                                <td>{producto.cantidad}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>)
            }
            
  
        </div>
    )

}