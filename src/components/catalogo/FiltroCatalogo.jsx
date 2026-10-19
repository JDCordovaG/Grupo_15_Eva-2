import React from 'react';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

export default function FiltroCatalogo({ filtroTipo, setFiltroTipo, busqueda, setBusqueda }) {
  return (
    <div className="card card-custom p-3 mb-4">
      <div className="row g-3 align-items-center">
        <div className="col-md-6">
          <input 
            type="text" 
            className="form-control bg-dark text-light border-secondary" 
            placeholder="Buscar por modelo o marca..." 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <select 
            className="form-select bg-dark text-light border-secondary"
            value={filtroTipo}
            onChange={(e) => setFiltroTipo(e.target.value)}
          >
            <option value="">Todas las Categorías</option>
            <option value="CPU">Procesadores (CPU)</option>
            <option value="GPU">Tarjetas Gráficas (GPU)</option>
            <option value="Placa">Placas Madre</option>
            <option value="RAM">Memorias RAM</option>
            <option value="Fuente">Fuentes de Poder</option>
          </select>
        </div>
      </div>
    </div>
  );
}