import React, { createContext, useContext, useState } from "react";

// Crear el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// Crear el proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false)

  // Función para iniciar sesión
  const login = (usuario) => {
    
    //Simularemos la creacion de un 
    // token (en una app real, esto sería un JWT o similar)
    const token = `fake-jwt-token-${usuario}`;
    if(usuario.email == "admin@gmail.com"){
      setAdmin(true)
      // nota a agregar usuario???
      // console.log(admin);
      
    }
    // console.log(user);
    
    localStorage.setItem("authToken", token);
    setUser(usuario);
    // console.log(user);
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem("authToken");
     // Limpiamos el usuario
    setUser(null);
    setAdmin(false)
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, admin }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto de autenticación
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);