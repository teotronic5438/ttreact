import React, { createContext, useContext, useState } from "react";

// Crear el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// Crear el proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Función para iniciar sesión
  const login = (usuario) => {

    //Simularemos la creacion de un token (en una app real, esto sería un JWT o similar)
    const token = `fake-jwt-token-${usuario}`;
    localStorage.setItem("authToken", token);
    setUser(usuario);

  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem("authToken");
     // Limpiamos el usuario
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto de autenticación
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);