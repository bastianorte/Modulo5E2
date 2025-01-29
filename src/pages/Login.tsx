import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MainLayout from "../layouts/MainLayout";



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "password") {
      login("admin");
      navigate("/dashboard");
    } else if (username === "user" && password === "password") {
      login("user");
      navigate("/");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <MainLayout>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin}>
        <label>
          Usuario:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </MainLayout>
  );
};

export default Login;