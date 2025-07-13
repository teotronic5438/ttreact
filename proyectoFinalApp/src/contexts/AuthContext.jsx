import React, { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// Crear el proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const token = localStorage.getItem("authToken");
    // const userData = localStorage.getItem("authUser");
    // const isAdmin = localStorage.getItem("isAdmin");

    // if (token && userData) {
    //   setUser(JSON.parse(userData));
    //   setAdmin(JSON.parse(isAdmin));
    // }

    const token = localStorage.getItem("authToken");
    const userData = localStorage.getItem("authUser");
    const isAdmin = localStorage.getItem("isAdmin");

    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (err) {
        console.error("Error al parsear userData:", err);
        localStorage.removeItem("authUser");
      }

      try {
        setAdmin(JSON.parse(isAdmin));
      } catch (err) {
        console.error("Error al parsear isAdmin:", err);
        localStorage.removeItem("isAdmin");
      }
    }
    setLoading(false);
  }, []);

  // Función para iniciar sesión
  const login = (usuario) => {
    
    //Simularemos la creacion de un 
    // token (en una app real, esto sería un JWT o similar)
    const token = `fake-jwt-token-${usuario.email}`;
    localStorage.setItem("authToken", token);
    localStorage.setItem("authUser", JSON.stringify(usuario));

    // => test12    
    // if(usuario.email == "admin@gmail.com"){
    //   setAdmin(true)
    //   // nota a agregar usuario???
    //   // console.log(admin);
    // }

    const esAdmin = usuario.email === "admin@gmail.com";
    setAdmin(esAdmin);
    localStorage.setItem("isAdmin", JSON.stringify(esAdmin));
    // console.log(user);
    setUser(usuario);
    // console.log(user);
  };

  // Función para cerrar sesión
  const logout = () => {
    // Limpiamos el localStorage
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    localStorage.removeItem("isAdmin");

     // Limpiamos el usuario
    setUser(null);
    setAdmin(false)
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, admin, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto de autenticación
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);