import "./App.css";
import React from "react";
import { useState } from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Login from "./components/Login.jsx";
import Cartera from "./components/pages/Cartera.jsx";
import Prestamos from "./components/pages/Prestamos.jsx";
import Miembros from "./components/pages/Miembros.jsx";

export default function App() {
  const [username, setUsername] = useState("");
  
  const handleLogin = (username) => {
    setUsername(username);
  };
  
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="*"
          element={<MainApp username={username} setUsername={setUsername} />}
          />
      </Routes>
    </Router>
  );
}

function MainApp({ username, setUsername}) {
  const navigate = useNavigate();
  const [resetActiveLink, setResetActiveLink] = useState(false);
  
  const handleBack = () => {
    setUsername("");
    setResetActiveLink(true);
    navigate(-1);
  };

  React.useEffect(() => {
    if (resetActiveLink) {
      setResetActiveLink(false);
    }
  }, [resetActiveLink]);
  return (
    <>
      <Navbar isUsername={username}

      />
      <div className="d-flex justify-content-end me-4 px-2 fs-5">
        <button onClick={handleBack} className="btn-back fw-bold py-1 px-4 mt-3 text-decoration-none border-0 bg-transparent position-absolute cursor-pointer">Atras</button>
      </div>
      <div className="flex">
        <Sidebar resetActiveLink={resetActiveLink} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/cartera" element={<Cartera />} />
            <Route path="/prestamos" element={<Prestamos />} />
            <Route path="/miembros" element={<Miembros />} />
          </Routes>
        </div>
      </div >
    </>
  );
}
