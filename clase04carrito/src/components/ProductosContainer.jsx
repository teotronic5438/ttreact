import { useEffect, useState } from "react";
import Tarjeta from "./Tarjeta";
import "../styles/Productos.css";
import Carrito from "./Carrito";

function ProductosContainer(){
    const [productosCarrito, setProductosCarrito] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
      fetch("https://68150b27225ff1af162af909.mockapi.io/productos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setProductosCarrito(data);
        setProductos(data); // Guardamos los productos en el estado
        setCargando(false);  // esto servira para desactivar el spinner
        setError(null);     // esto servira para desactivar el spinner

      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
        setCargando(false);
        setError("Error al obtener los productos");
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

    // useState es un hook que nos permite manejar el estado de un componente
    // useEffect es un hook que nos permite ejecutar efectos secundarios en un componente
    // useEffect se ejecuta después de que el componente se ha montado o actualizado
    // useEffect se puede usar para hacer peticiones a una API, suscribirse a eventos, etc.
    // useEffect recibe dos parámetros: una función y un array de dependencias
    // Si el array de dependencias está vacío, la función se ejecuta una sola vez al montar el componente
    // Si el array de dependencias tiene valores, la función se ejecuta cada vez que esos valores cambian
    // Si no se pasa el array de dependencias, la función se ejecuta cada vez que el componente se actualiza

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
    
    if (cargando) {
      return (
        <div className="spinner">
          <div className="loader"></div>
          Cargando Productos...
        </div>
      );      
    } else if (error) {
        return <div className="error">Error: {error}</div>;
    } else {
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
    

}

export default ProductosContainer;