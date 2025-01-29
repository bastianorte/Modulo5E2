import { createContext, useContext, useState, useEffect } from "react";
import { encryptData, decryptData } from "../utils/encryption";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const decryptedUser = decryptData(storedUser);
      setUser(decryptedUser);
    }
    setLoading(false);
  }, []);

  const login = (role) => {
    const userData = { role }; // Asegura que el rol se pase correctamente
    setUser(userData);
    const encryptedUser = encryptData(userData); // Encriptación ya configurada
    localStorage.setItem("user", encryptedUser);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{!loading ? children : <p>Cargando...</p>}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);