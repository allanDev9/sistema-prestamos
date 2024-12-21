import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FcMoneyTransfer } from "react-icons/fc";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import LogoSistema from './img/logo-sistema.png';

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState("");

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="sidebar">
      <div className="container-logo">
        <img src={LogoSistema} alt="Logo" className="logo" />
      </div>
        <div style={{ borderBottom: '1px solid white'}} className="separador"></div>
      <ul>
        <li>
          <NavLink
            className={activeLink === "/home" ? "active" : ""}
            style={{ fontWeight: "bold" }}
            to="/cartera"
            onClick={() => handleActiveLink("/cartera")}
          >
            <FcMoneyTransfer style={{ marginRight: "15px" }} />
            Mi Cartera
          </NavLink>
        </li>
        <li>
          <NavLink
            className={activeLink === "/home" ? "active" : ""}
            style={{ fontWeight: "bold" }}
            to="/prestamos"
            onClick={() => handleActiveLink("/prestamos")}
          >
            <FaMoneyBillTrendUp style={{ marginRight: "15px" }} />
            Prestamos
          </NavLink>
        </li>
        <li>
          <NavLink
            className={activeLink === "/home" ? "active" : ""}
            style={{ fontWeight: "bold" }}
            to="/miembros"
            onClick={() => handleActiveLink("/miembros")}
          >
            <FaPerson style={{ marginRight: "15px" }} />
            Miembros
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
