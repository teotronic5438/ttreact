import { useState } from "react";
import Tarjeta from "./Tarjeta";
import "../styles/Productos.css";
import Carrito from "./Carrito";

function ProductosContainer({productos}){
    const [productosCarrito, setProductosCarrito] = useState([]);

    function agregarAlCarrito(producto) {
        setProductosCarrito(prevCarrito => {
          const index = prevCarrito.findIndex(item => item.nombre === producto.nombre);
      
          if (index !== -1) {
            // Ya está en el carrito, actualizamos cantidad
            const nuevoCarrito = [...prevCarrito];
            nuevoCarrito[index].cantidad += 1;
            return nuevoCarrito;
          } else {
            // No está, lo agregamos con cantidad 1
            return [...prevCarrito, { ...producto, cantidad: 1 }];
          }
        });
      }
      
    return(
        <div>
            <div className="productos-conteiner">
                {productos.map(producto => (
                    <Tarjeta key={producto.nombre}  producto={producto} agregarAlCarrito={agregarAlCarrito}/>
                ))}
            </div>
            <Carrito productos={productosCarrito}/>
        </div>


    )
}

export default ProductosContainer;