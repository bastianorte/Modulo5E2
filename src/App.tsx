import NavBar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from './pages/Inicio';
import Equipo from './pages/Equipo';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';

export default function App() {
return (
  <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Equipo" element={<Equipo />} />
        <Route path="/Contacto" element={<Contacto />} />        
      </Routes>
    </Router>
  <Footer/> 
  </>
  );
  }

  