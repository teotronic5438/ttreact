import React, { createContext, useState } from "react";

// Crear el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const CarritoContext = createContext();

// Crear el proveedor del contexto
export const CarritoProvider = ({ children }) => {
  const [productosCarrito, setProductosCarrito] = useState([]);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto, cantidad) => {
      // primero busco si el producto ya existe en el carrito
      const productoExistente = productosCarrito.find((p) => p.id === producto.id);

      if (productoExistente) {
          // Si el producto ya existe, actualizamos su cantidad
          // usamos el spread operator para no mutar el estado
          setProductosCarrito(
              productosCarrito.map((p) =>
                  p.id === producto.id
                      ? { ...productoExistente, cantidad: productoExistente.cantidad + cantidad }
                      : p
              )
          );
      } else {
          // Si el producto no existe, lo agregamos al carrito
          // usamos el spread operator para no mutar el estado
          setProductosCarrito([
              ...productosCarrito, 
              { ...producto, cantidad }
          ]);
      }
  };

  // Función para eliminar un producto del carrito
  function eliminarDelCarrito(productoAEliminar) {
    setProductosCarrito(productosCarrito.filter((p) => p.id !== productoAEliminar.id));
  }

  function vaciarCarrito(){
    setProductosCarrito([]);
  }

  return (
    <CarritoContext.Provider value={{ productosCarrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
}