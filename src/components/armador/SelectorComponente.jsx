import React from 'react';

export default function SelectorComponente({ categoria, componenteElegido, alAbrirSelector }) {
  return (
    <div className="card card-custom p-3 mb-3 d-flex flex-row justify-content-between align-items-center">
      <div>
        <span className="badge bg-secondary mb-1">{categoria}</span>
        <h5 className="text-light mb-0">
          {componenteElegido ? componenteElegido.modelo : <span className="">Sin seleccionar</span>}
        </h5>
      </div>
      <button className="btn btn-outline-success btn-sm" onClick={alAbrirSelector}>
        {componenteElegido ? 'Cambiar' : 'Seleccionar'}
      </button>
    </div>
  );
}