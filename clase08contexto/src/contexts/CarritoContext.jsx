import React, { createContext, useState } from "react";

// Crear el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const CarritoContext = createContext();

// Crear el proveedor del contexto
export const CarritoProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([]);


  // Función para agregar un producto al carrito
  const agregarProducto = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  
  // Función para eliminar un producto del carrito
  const eliminarProducto = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito.filter((producto) => producto.id !== id)
    );
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarProducto, eliminarProducto }}>
      {children}
    </CarritoContext.Provider>
  );
}