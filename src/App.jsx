import "./App.css";
import { useState } from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Login from "./components/Login";
import Cartera from "./pages/Cartera.jsx";
import Prestamos from "./pages/Prestamos.jsx";
import Miembros from "./pages/Miembros.jsx";

export default function App() {
  const [username, setUsername] = useState('');
  
  const handleLogin = (username) => { 
    setUsername(username);
  }
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={ handleLogin} />} />
        <Route
          path="*"
          element={
            <>
              <Navbar isUsername={username}/>
              <div className="flex">
                <Sidebar />
                <div className="content">
                  <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/cartera" element={<Cartera />} />
                    <Route path="/prestamos" element={<Prestamos />} />
                    <Route path="/miembros" element={<Miembros />} />
                  </Routes>
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}
