import React from "react";
import { useState, useEffect } from "react";
import Person from "./Person";

export default function Miembros() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3003/api/miembros')
      .then(response => response.json())
      .then(data => setPersons(data))
      .catch(error => console.error('Error fetching miembros:', error));
  }, []);

  return (
    <section className="container">
      <h1 style={{ display: "flex", justifyContent: "center", color: "black", fontWeight: 'bold' , marginTop: '30px'}} >
        Miembros
      </h1>
      <div 
        style={{ display: "flex", justifyContent: "center", marginTop: "-40px" }}
        className="container-datatable-miembros"
      >
        <div style={{ width: '90%'}} >
          <Person data={persons} />
        </div>
      </div>
    </section>
  )
}
