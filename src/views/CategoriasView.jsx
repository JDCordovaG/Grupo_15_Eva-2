import React from 'react';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

export default function CategoriasView({ alSeleccionarCategoria }) {
  const categorias = [
    { id: 'CPU', nombre: 'Procesadores (CPU)', icono: 'bi-cpu', desc: 'Cerebros de alto rendimiento para tu equipo.' },
    { id: 'GPU', nombre: 'Tarjetas Gráficas (GPU)', icono: 'bi-gpu-card', desc: 'Potencia visual para gaming y renderizado.' },
    { id: 'Placa', nombre: 'Placas Madre', icono: 'bi-motherboard', desc: 'La base estructural y de conectividad.' },
    { id: 'RAM', nombre: 'Memorias RAM', icono: 'bi-memory', desc: 'Velocidad de procesamiento multitarea.' },
    { id: 'Fuente', nombre: 'Fuentes de Poder', icono: 'bi-lightning-charge', desc: 'Energía estable y certificada.' }
  ];

  return (
    <div className="container py-4">
      <h2 className="text-light mb-4"><i className="bi bi-folder2-open me-2"></i>Categorías de Componentes</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {categorias.map(cat => (
          <div key={cat.id} className="col">
            <div className="card card-custom h-100 p-4 text-center">
              <i className={`bi ${cat.icono} text-success display-3 mb-3`}></i>
              <h4 className="text-light">{cat.nombre}</h4>
              <p className="small">{cat.desc}</p>
              <button className="btn btn-outline-success mt-auto" onClick={() => alSeleccionarCategoria(cat.id)}>
                Ver Productos
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}