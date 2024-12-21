import "./App.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Cartera from "./pages/Cartera.jsx";
import Prestamos from "./pages/Prestamos.jsx";
import Miembros from "./pages/Miembros.jsx";

export default function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="content">
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Cartera/>} /> */}
            <Route path="/cartera" element={<Cartera />} />
            <Route path="/prestamos" element={<Prestamos />} />
            <Route path="/miembros" element={<Miembros />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
