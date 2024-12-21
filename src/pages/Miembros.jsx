import React from "react";
import { useState } from "react";
import Person from "./Person";
import miembrosData from './json-pages/Miembros.json';

export default function Miembros() {
  const [persons, serPersons] = useState(miembrosData);

  return (
    <section className="container">
      <h1 style={{ display: "flex", justifyContent: "center", color: "black", fontWeight: 'bold' , marginTop: '30px'}} >
        Miembros
      </h1>
      <div 
        style={{ display: "flex", justifyContent: "center", marginTop: "-40px" }}
        className="container-datatable-miembros"
      >
        <div style={{ width: '90%'}} className="row">
          <Person data={persons} />
        </div>
      </div>
    </section>
  )
}
