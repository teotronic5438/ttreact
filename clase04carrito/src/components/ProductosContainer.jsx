import { useEffect, useState } from "react";
import Tarjeta from "./Tarjeta";
import "../styles/Productos.css";
import Carrito from "./Carrito";

function ProductosContainer({productos}){
    const [productosCarrito, setProductosCarrito] = useState([]);

    // useState es un hook que nos permite manejar el estado de un componente
    // useEffect es un hook que nos permite ejecutar efectos secundarios en un componente
    // useEffect se ejecuta después de que el componente se ha montado o actualizado
    // useEffect se puede usar para hacer peticiones a una API, suscribirse a eventos, etc.
    // useEffect recibe dos parámetros: una función y un array de dependencias
    // Si el array de dependencias está vacío, la función se ejecuta una sola vez al montar el componente
    // Si el array de dependencias tiene valores, la función se ejecuta cada vez que esos valores cambian
    // Si no se pasa el array de dependencias, la función se ejecuta cada vez que el componente se actualiza
    useEffect(() => {
      fetch("https://680f75cd67c5abddd195693e.mockapi.io/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setProductosCarrito(data);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
    }, []);

    // Ejemplo de uso de useEffect
    {/*}
    useEffect(() => {
      console.log("El comonente se ha montado o actualizado");
      return () => {
        console.log("El componente se ha desmontado");
      };
      
    }, []);
    */}

    function agregarAlCarrito(producto) {
        setProductosCarrito(prevCarrito => {
          const index = prevCarrito.findIndex(item => item.nombre === producto.nombre);
      
          if (index !== -1) {
            // Ya está en el carrito, actualizamos cantidad de forma inmutable
            const nuevoCarrito = [...prevCarrito];
            nuevoCarrito[index] = {
                ...nuevoCarrito[index],
                cantidad: nuevoCarrito[index].cantidad + 1
            };
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