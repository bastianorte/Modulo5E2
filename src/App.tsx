import NavBar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from './pages/Inicio';
import Equipo from './pages/Equipo';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';


export default function App() {
return (
  <>
  <AuthProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
            <Inicio />
          } />
        <Route path="/Equipo" element={
          <ProtectedRoute allowedRoles={["admin", "user"]}>
            <Equipo />
          </ProtectedRoute>
          } />
        <Route path="/Contacto" element={
              <Contacto />
          } />     
        <Route path="/login" element={<Login />} />           
      </Routes>
    </Router>
    </AuthProvider>
  <Footer/> 
  </>
  );
  }

  