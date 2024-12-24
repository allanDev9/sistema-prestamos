import React, { useState, useEffect } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function Person({ data }) {
  const [datatable, setDatatable] = useState(data);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setDatatable(data);
  }, [data]);

  const search = (event) => {
    const query = event.query.toLowerCase();
    const results = data.filter(
      (item) =>
        item.name.toLowerCase().includes(query) || 
        item.code.toString().toLowerCase().includes(query)
    );
    setFilteredCountries(results);
  };

  const handleInputChange = (e) => {
    const value = e.value || "";
    setSearchValue(value);

    const filteredData = data.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.code.toString().toLowerCase().includes(value.toLowerCase())
    );
    setDatatable(filteredData);
  };

  return (
    <div
      className="card"
      style={{ marginTop: "70px", padding: "30px", border: "1px solid black" }}
    >
      <div className="container-search d-flex justify-content-start mb-3">
        <div className="search-input flex justify-content-center">
          <AutoComplete
            field="name" 
            value={searchValue} 
            placeholder="Buscar"
            suggestions={filteredCountries} 
            completeMethod={search} 
            onChange={handleInputChange} 
          />
        </div>
      </div>
      <DataTable
        value={datatable} 
        className="custom-datatable"
        selectionMode="single"
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
      >
        <Column className="color-column" field="code" header="Código"></Column>
        <Column className="color-column" field="name" header="Nombre"></Column>
        <Column className="color-column" field="category" header="Rol"></Column>
      </DataTable>
    </div>
  );
}

export default Person;